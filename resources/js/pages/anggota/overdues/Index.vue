<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import Pagination from '@/components/tables/Pagination.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import { index, show } from '@/routes/daftarketerlambatans';
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
        title: 'Daftar Keterlambatan',
        href: index().url,
    },
];
const props = defineProps<{
    Overdues: PaginatedResponse<PengajuanPeminjaman>;
}>();
console.log(props.Overdues);
const pagination = computed(() => ({
    previous: props.Overdues.prev_page_url,
    next: props.Overdues.next_page_url,
}));
const pageProps = computed(() => {
    return (
        (usePage().props.filters as {
            search?: string;
            sortColumn?: string;
            order?: 'asc' | 'desc';
            searchBy?: string;
            perPage?: string;
        }) || {}
    );
});
const searchQuery = ref(pageProps.value.search ?? '');
const searchBy = ref(pageProps.value.searchBy ?? '');
const selectedSort = ref(pageProps.value.sortColumn ?? 'created_at');
const sortOrder = ref<'asc' | 'desc'>(pageProps.value.order ?? 'asc');
const perPage = ref(pageProps.value.perPage ?? '7');
const updateDaftarKeterlambatans = () => {
    router.get(
        '/daftarketerlambatans',
        {
            search: searchQuery.value,
            sortColumn: selectedSort.value,
            order: sortOrder.value,
            column: searchBy.value,
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
    updateDaftarKeterlambatans();
}
watchDebounced(
    [searchQuery, searchBy, perPage],
    () => {
        updateDaftarKeterlambatans();
    },
    { debounce: 500 },
);
const resetFilters = () => {
    searchQuery.value = '';
    searchBy.value = '';
    perPage.value = '7';

    updateDaftarKeterlambatans();
};
const columns = [
    { key: 'no', label: 'No' },
    { key: 'judul', label: 'Judul Buku', sortable: true },
    { key: 'penulis', label: 'Penulis Buku', sortable: true },
    { key: 'penerbit', label: 'Penerbit Buku', sortable: true },
    { key: 'denda', label: 'Denda', sortable: true },
    { key: 'action', label: 'Aksi', sortable: false },
];

// const isOpen = ref<Record<number, boolean>>({});

// const handleDelete = (id: number) => {
//     console.log('Button hapus ditekan, isOpen:', isOpen.value);

//     router.delete(destroy.url(id), {
//         onSuccess: () => {
//             isOpen.value[id] = false;
//             // Tutup dialog setelah sukses hapus
//         },
//     });
// };
const popoverOpen = ref(false);
const formatRupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};
</script>
<template>
    <!-- <Head title="Pengajuan Saya" /> -->
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="mx-auto mt-5 max-w-6xl overflow-x-auto">
            <FlashMessage />
            <Card class="border-transparent">
                <CardContent>
                    <div
                        class="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center"
                    >
                        <div class="flex items-end gap-2">
                            <Input
                                id="searchQuery"
                                class="w-full sm:w-64"
                                v-model="searchQuery"
                                placeholder="Cari..."
                            />
                            <select
                                id="searchBy"
                                v-model="searchBy"
                                @change="updateDaftarKeterlambatans"
                                class="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:outline-none sm:w-40"
                            >
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
                                        <PopoverTrigger
                                            ><Button
                                                variant="outline"
                                                class="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-funnel"
                                                >
                                                    <path
                                                        d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
                                                    />
                                                </svg> </Button
                                        ></PopoverTrigger>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span>Filter Data</span>
                                    </TooltipContent>
                                    <PopoverContent
                                        ><div class="flex flex-col">
                                            <Label
                                                for="perPage"
                                                class="mt-3 mb-2"
                                            >
                                                Jumlah Data
                                            </Label>
                                            <select
                                                id="perPage"
                                                v-model="perPage"
                                                class="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                                            >
                                                <option value="7">
                                                    -- Jumlah Standar --
                                                </option>
                                                <option value="1">5</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="50">50</option>
                                            </select>
                                            <div class="mt-2 flex flex-col">
                                                <Button
                                                    type="button"
                                                    class="rounded bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
                                                    @click="resetFilters"
                                                >
                                                    Reset Filter
                                                </Button>
                                            </div>
                                        </div></PopoverContent
                                    >
                                </Popover>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <DataTable
                        :columns="columns"
                        :data="Overdues.data"
                        :links="Overdues.links"
                        :current_page="props.Overdues.current_page"
                        :per_page="props.Overdues.per_page"
                        :filters="{
                            search: searchQuery,
                            sortColumn: selectedSort,
                            sortOrder: sortOrder,
                        }"
                        @toggleSort="toggleSort"
                    >
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
                        <template #denda="{ item }">
                            {{ formatRupiah(item.denda) }}
                        </template>

                        <template #action="{ item: daftarketerlambatans }">
                            <div class="flex items-center gap-2">
                                <div class="group relative inline-block">
                                    <Link
                                        :href="show(daftarketerlambatans.id)"
                                        as="button"
                                    >
                                        <Button variant="outline" size="icon">
                                            <Eye class="h-4 w-4" />
                                        </Button>
                                    </Link>

                                    <span
                                        class="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100"
                                    >
                                        Lihat
                                    </span>
                                </div>
                                <!-- <div class="group relative inline-block">
                                    <Dialog
                                        v-model:open="
                                            isOpen[pengajuananggotas.id]
                                        "
                                        :key="pengajuananggotas.id"
                                    >
                                        <DialogTrigger as-child>
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                            >
                                                <Trash2 class="h-4 w-4" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent class="sm:max-w-md">
                                            <DialogHeader>
                                                <DialogTitle
                                                    >Konfirmasi
                                                    Hapus</DialogTitle
                                                >
                                                <DialogDescription>
                                                    Apakah Anda yakin ingin
                                                    menghapus pengguna ini?
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter class="gap-2">
                                                <Button
                                                    variant="destructive"
                                                    @click="
                                                        handleDelete(
                                                            pengajuananggotas.id,
                                                        )
                                                    "
                                                >
                                                    Hapus
                                                </Button>
                                                <DialogClose as-child>
                                                    <Button
                                                        type="button"
                                                        variant="secondary"
                                                        >Batal</Button
                                                    >
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                    <span
                                        class="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100"
                                    >
                                        Hapus
                                    </span>
                                </div> -->
                            </div>
                        </template>
                    </DataTable>
                </CardContent>
            </Card>
        </div>
        <Pagination
            :previousPage="pagination.previous"
            :nextPage="pagination.next"
            :links="props.Overdues.links"
        />
    </AppLayout>
</template>
