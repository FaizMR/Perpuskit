<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ShowData from '@/components/ShowData.vue';
import { Card, CardContent } from '@/components/ui/card';
import { index, show } from '@/routes/riwayatpeminjamans';
import { BreadcrumbItem, PengajuanPeminjaman } from '@/types';

const { Loanhistory } = defineProps<{
    Loanhistory: { data: PengajuanPeminjaman };
}>();
console.log(Loanhistory);
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Riwayat Peminjaman Buku',
        href: index().url,
    },
    {
        title: 'Detail Riwayat Peminjaman Buku',
        href: show(Loanhistory.data.id).url,
    },
];

const columns = [
    { key: 'kode_transaksi', label: 'Kode Transaksi', sortable: true },
    { key: 'book_id', label: 'Judul Buku', sortable: true },
    { key: 'tanggal_pengajuan', label: 'Tanggal Pengajuan', sortable: true },
    { key: 'tanggal_peminjaman', label: 'Tanggal Peminjaman', sortable: true },
    {
        key: 'tanggal_jatuh_tempo',
        label: 'Tanggal Jatuh Tempo',
        sortable: true,
    },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'catatan', label: 'Satatan', sortable: true },
];
const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date));
};
</script>
<template>
    <div class="mx-auto mt-5 max-w-6xl overflow-x-auto">
        <div class="mb-10 ml-6">
            <Breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <Card class="border-transparent">
            <CardContent>
                <ShowData :columns="columns" :data="Loanhistory.data"
                    ><template #users_id="{ data }">
                        {{ data.user?.name || 'Tidak Ada' }}
                    </template>
                    <template #book_id="{ data }">
                        {{ data.book?.judul || 'Tidak Ada' }}
                    </template>
                    <template #tanggal_pengajuan="{ data }">
                        {{ formatDate(data.tanggal_pengajuan) }}
                    </template>
                    <template #tanggal_peminjaman="{ data }">
                        {{ formatDate(data.tanggal_peminjaman) }}
                    </template>
                    <template #tanggal_jatuh_tempo="{ data }">
                        {{ formatDate(data.tanggal_jatuh_tempo) }}
                    </template>
                </ShowData>
            </CardContent>
        </Card>
    </div>
</template>
