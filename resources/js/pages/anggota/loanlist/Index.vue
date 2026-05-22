<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import Pagination from '@/components/tables/Pagination.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import FlashMessage from '@/components/ui/flash/FlashMessage.vue';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import AppLayout from '@/layouts/AppLayout.vue';
import { index, show, store } from '@/routes/daftarpeminjamans';
import {
    BreadcrumbItem,
    PaginatedResponse,
    PengajuanPeminjaman,
} from '@/types';
import { Link, router, usePage } from '@inertiajs/vue3';
import { watchDebounced } from '@vueuse/core';
import { Eye } from 'lucide-vue-next';
import { computed, ref } from 'vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Daftar Peminjaman',
        href: index().url,
    },
];
const props = defineProps<{
    loanResource: PaginatedResponse<PengajuanPeminjaman>;
}>();
console.log(props.loanResource);
const pagination = computed(() => ({
    previous: props.loanResource.prev_page_url,
    next: props.loanResource.next_page_url,
}));
const pageProps = computed(() => {
    return (
        (usePage().props.filters as {
            search?: string;
            sortColumn?: string;
            order?: 'asc' | 'desc';
            statusSearch?: string;
            searchBy?: string;
            perPage?: string;
        }) || {}
    );
});
const searchQuery = ref(pageProps.value.search ?? '');
const searchBy = ref(pageProps.value.searchBy ?? '');
const selectedSort = ref(pageProps.value.sortColumn ?? 'created_at');
const sortOrder = ref<'asc' | 'desc'>(pageProps.value.order ?? 'asc');
const statusSearch = ref(pageProps.value.statusSearch ?? '');
const perPage = ref(pageProps.value.perPage ?? '7');
const updatedaftarpeminjaman = () => {
    router.get(
        '/daftarpeminjamans',
        {
            search: searchQuery.value,
            sortColumn: selectedSort.value,
            order: sortOrder.value,
            column: searchBy.value,
            statusSearch: statusSearch.value,
            searchBy: searchBy.value,
            perPage: perPage.value,
        },
        { preserveState: true, replace: true },
    );
};
function toggleSort(key: string) {
    if (selectedSort.value === key) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        selectedSort.value = key;
        sortOrder.value = 'asc';
    }
    updatedaftarpeminjaman();
}
watchDebounced(
    [searchQuery, statusSearch, searchBy, perPage],
    () => {
        updatedaftarpeminjaman();
    },
    { debounce: 500 },
);
const resetFilters = () => {
    searchQuery.value = '';
    statusSearch.value = '';
    searchBy.value = '';
    perPage.value = '7';

    updatedaftarpeminjaman();
};
const columns = [
    { key: 'no', label: 'No' },
    { key: 'judul', label: 'Judul Buku', sortable: true },
    { key: 'penulis', label: 'Penulis Buku', sortable: true },
    { key: 'penerbit', label: 'Penerbit Buku', sortable: true },
    // { key: 'status', label: 'Status', sortable: true },
    { key: 'jatuh_tempo', label: 'Jatuh Tempo', sortable: true },
    { key: 'action', label: 'Aksi', sortable: false },
];
function formatHari(hari: number): string {
    return `${hari} hari`;
}
function hitungHari(
    tanggalPeminjaman: string | Date,
    tanggalJatuhTempo: string | Date,
): number {
    const peminjaman = new Date(tanggalPeminjaman).getTime();
    const jatuhTempo = new Date(tanggalJatuhTempo).getTime();

    return Math.ceil((jatuhTempo - peminjaman) / 86400000);
}

const isOpen = ref<Record<number, boolean>>({});
const handleAjukanPerpanjangan = (
    book_id: number,
    pengajuananggotas: number,
) => {
    console.log(book_id);

    router.post(
        store().url,
        {
            book_id: book_id,
        },
        {
            onSuccess: () => {
                isOpen.value[pengajuananggotas] = false;
                console.log('Permintaan pinjam berhasil dikirim ke admin.');
            },
        },
    );
};
const popoverOpen = ref(false);
</script>
<template>
    <!-- <Head title="Pengajuan Saya" /> -->
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="md:mx-auto mt-10 max-w-sm md:max-w-6xl overflow-x-auto md:mt-5">
            <FlashMessage />
            <Card class="border-transparent mt-2">
                <CardContent>
                    <div class="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
                        <div class="flex items-end gap-2">
                            <Input id="searchQuery" class="w-full sm:w-64" v-model="searchQuery"
                                placeholder="Cari..." />
                            <select id="searchBy" v-model="searchBy" @change="updatedaftarpeminjaman"
                                class="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:outline-none sm:w-40">
                                <option value="">- Semua Kolom -</option>
                                <option value="judul">Judul Buku</option>
                                <option value="penulis">Penulis Buku</option>
                                <option value="penerbit">Penerbit Buku</option>
                            </select>
                        </div>
                        <TooltipProvider>
                            <Tooltip v-if="!popoverOpen">
                                <Popover>
                                    <TooltipTrigger as-child>
                                        <PopoverTrigger><Button variant="outline" class="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-funnel">
                                                    <path
                                                        d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                                                </svg> </Button></PopoverTrigger>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span>Filter Data</span>
                                    </TooltipContent>
                                    <PopoverContent>
                                        <div class="flex flex-col">
                                            <Label for="perPage" class="mb-2">
                                                Jumlah Data
                                            </Label>
                                            <select id="perPage" v-model="perPage"
                                                class="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:outline-none">
                                                <option value="7">
                                                    -- Jumlah Standar --
                                                </option>
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="50">50</option>
                                            </select>
                                            <div class="mt-2 flex flex-col">
                                                <Button type="button"
                                                    class="rounded bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
                                                    @click="resetFilters">
                                                    Reset Filter
                                                </Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <DataTable :columns="columns" :data="loanResource.data" :links="loanResource.links"
                        :current_page="props.loanResource.current_page" :per_page="props.loanResource.per_page"
                        :filters="{
                            search: searchQuery,
                            sortColumn: selectedSort,
                            sortOrder: sortOrder,
                        }" @toggleSort="toggleSort">
                        <template #no="{ i, current_page, per_page }">
                            {{ (current_page - 1) * per_page + i + 1 }}
                        </template>
                        <template #judul="{ item }">
                            {{ item.book?.judul || 'Tidak Ada' }}
                        </template>
                        <template #penulis="{ item }">
                            {{ item.book?.penulis || 'Tidak Ada' }}
                        </template>
                        <template #penerbit="{ item }">
                            {{ item.book?.penerbit || 'Tidak Ada' }}
                        </template>
                        <template #jatuh_tempo="{ item }">
                            {{
                                formatHari(
                                    hitungHari(
                                        item.tanggal_peminjaman,
                                        item.tanggal_jatuh_tempo,
                                    ),
                                )
                            }}
                        </template>
                        <template #action="{ item: pengajuananggotas }">
                            <div class="flex items-center gap-2">
                                <div class="group relative inline-block">
                                    <!-- Show -->
                                    <Link :href="show(pengajuananggotas.id)" as="button">
                                        <Button variant="outline" size="icon">
                                            <Eye class="h-4 w-4" />
                                        </Button>
                                    </Link>

                                    <span
                                        class="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100">
                                        Lihat
                                    </span>
                                </div>

                                <Dialog v-model:open="isOpen[pengajuananggotas.id]"
                                    :key="'perpanjang-' + pengajuananggotas.id" v-if="
                                        hitungHari(
                                            pengajuananggotas.tanggal_peminjaman,
                                            pengajuananggotas.tanggal_jatuh_tempo,
                                        ) < 2
                                    ">
                                    <DialogTrigger as-child>
                                        <Button variant="secondary" size="icon" class="w-28">
                                            Perpanjang
                                        </Button>
                                    </DialogTrigger>

                                    <DialogContent class="sm:max-w-xl">
                                        <DialogHeader>
                                            <DialogTitle>
                                                Konfirmasi Pengajuan
                                                Perpanjangan
                                            </DialogTitle>

                                            <h1 class="mt-2">
                                                Judul Buku:<br />
                                                <strong>{{
                                                    pengajuananggotas.book
                                                        ?.judul
                                                }}</strong>
                                            </h1>

                                            <h1 class="mt-2">
                                                Jatuh Tempo Saat Ini:<br />
                                                <strong>{{
                                                    pengajuananggotas.tanggal_jatuh_tempo
                                                    }}</strong>
                                            </h1>

                                            <DialogDescription class="mt-4">
                                                Anda akan mengajukan
                                                perpanjangan jatuh tempo untuk
                                                buku ini. Admin akan menentukan
                                                tanggal jatuh tempo baru dan
                                                meninjau permintaan Anda.
                                            </DialogDescription>
                                        </DialogHeader>

                                        <DialogFooter class="gap-2">
                                            <Button variant="default" @click="
                                                handleAjukanPerpanjangan(
                                                    pengajuananggotas.book_id,
                                                    pengajuananggotas.id,
                                                )
                                                ">
                                                Ajukan Perpanjangan
                                            </Button>

                                            <DialogClose as-child>
                                                <Button type="button" variant="secondary">
                                                    Batal
                                                </Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </template>
                    </DataTable>
                </CardContent>
                <div class="mb-10 mr-5 ml-6 md:mr-0 md:ml-0">
                    <Pagination :previousPage="pagination.previous" :nextPage="pagination.next"
                        :links="props.loanResource.links" />
                </div>
            </Card>
        </div>
    </AppLayout>
</template>
