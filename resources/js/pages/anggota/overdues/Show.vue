<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ShowData from '@/components/ShowData.vue';
import { Card, CardContent } from '@/components/ui/card';
import { index, show } from '@/routes/daftarketerlambatans';
import { BreadcrumbItem, PengajuanPeminjaman } from '@/types';

const { currentKeterlambatan } = defineProps<{
    currentKeterlambatan: {
        data: PengajuanPeminjaman;
    };
}>();
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Daftar Keterlambatan',
        href: index().url,
    },
    {
        title: 'Detail Daftar Keterlambatan',
        href: show(currentKeterlambatan.data.id).url,
    },
];

const columns = [
    { key: 'kode_transaksi', label: 'Kode Transaksi', sortable: true },
    { key: 'book_id', label: 'judul Buku', sortable: true },
    { key: 'tanggal_pengajuan', label: 'Tanggal Pengajuan', sortable: true },
    { key: 'tanggal_peminjaman', label: 'Tanggal Peminjaman', sortable: true },
    {
        key: 'tanggal_jatuh_tempo',
        label: 'Tanggal Jatuh Tempo',
        sortable: true,
    },
    { key: 'denda', label: 'Denda', sortable: true },
    // { key: 'status', label: 'status', sortable: true },
    { key: 'catatan', label: 'catatan', sortable: true },
];
const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date));
};
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
    <div class="mx-auto mt-5 max-w-6xl overflow-x-auto">
        <div class="mb-10 ml-6">
            <Breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <Card class="border-transparent">
            <CardContent>
                <ShowData :columns="columns" :data="currentKeterlambatan.data">
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
                    <template #denda="{ data }">
                        {{ formatRupiah(data.denda) }}
                    </template>
                </ShowData>
            </CardContent>
        </Card>
    </div>
</template>
