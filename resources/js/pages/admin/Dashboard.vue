<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@/components/ui/table';
import TableHeader from '@/components/ui/table/TableHeader.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { Book, BreadcrumbItem, PengajuanPeminjaman } from '@/types';
import { Head } from '@inertiajs/vue3';
import { BookOpen, Library, Users } from 'lucide-vue-next';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/dashboard',
    },
];
// =====================
// Components
// =====================
const props = defineProps<{
    stats: {
        peminjaman: {
            dipinjam: number;
            dikembalikan: number;
            terlambat: number;
            rusak_hilang: number;
        };
        buku: {
            total: number;
            paling_sering_dipinjam: Book | null;
        };
        pengguna: {
            total: number;
            petugas: number;
            anggota: number;
        };
    };
    recentTransactions: PengajuanPeminjaman[];
    topDenda: PengajuanPeminjaman[];
}>();

// const bukuseringDipinjam = computed(() => {
//     const book = props.bukuseringDipinjam;
//     if (!book?.judul || book.total_dipinjam == null) return 'Null';
//     return `${book.judul} (${book.total_dipinjam})`;
// });

// =====================
// Data
// =====================
const peminjaman = [
    {
        label: 'Total Dipinjam',
        value: props.stats.peminjaman.dipinjam?.toString() || 'Null',
    },
    {
        label: 'Telah Dikembalikan',
        value: props.stats.peminjaman.dikembalikan?.toString() || 'Null',
    },
    {
        label: 'Terlambat',
        value: props.stats.peminjaman.terlambat?.toString() || 'Null',
    },
];
const Buku = [
    {
        label: 'Total Buku',
        value: props.stats.buku.total?.toString() || 'Null',
    },
    {
        label: 'Sering Dipinjam',
        value: props.stats.buku.paling_sering_dipinjam?.judul || '0',
    },
    {
        label: 'Buku Rusak/Hilang',
        value: props.stats.peminjaman.rusak_hilang?.toString() || 'Null',
    },
];
const Pengguna = [
    {
        label: 'Total Pengguna',
        value: props.stats.pengguna.total?.toString() || 'Null',
    },
    {
        label: 'Total Petugas',
        value: props.stats.pengguna.petugas?.toString() || 'Null',
    },
    {
        label: 'Total Anggota',
        value: props.stats.pengguna.anggota?.toString() || 'Null',
    },
];
// function formatHari(hari: number): string {
//     return `${hari} hari terlambat`;
// }
// function hitungHari(
//     tanggalPeminjaman: string | Date,
//     tanggalJatuhTempo: string | Date,
// ): number {
//     const peminjaman = new Date(tanggalPeminjaman).getTime();
//     const jatuhTempo = new Date(tanggalJatuhTempo).getTime();

//     return Math.ceil((jatuhTempo - peminjaman) / 86400000);
// }
const statusVariant = (status: string) => {
    if (status === 'pending') return 'warning';

    const destructiveStatus = ['terlambat', 'rusak', 'hilang', 'dibatalkan'];
    if (destructiveStatus.includes(status)) return 'destructive';

    return 'success';
};
const formatRupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};
// const transaksi = [{}];
// const peminjamanSaya = [];
</script>

<template>

    <Head titele="Beranda" />
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="space-y-2 bg-background p-3">
            <!-- Statistik -->
            <div class="mx-auto grid max-w-5xl grid-cols-1 gap-2 md:grid-cols-3 lg:max-w-7xl">
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between">
                        <div class="flex items-center gap-2">
                            <BookOpen class="h-5 w-5 text-primary" />
                            <CardTitle class="text-xl">Peminjaman</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent class="space-y-2 text-sm">
                        <Table>
                            <TableBody>
                                <TableRow v-for="row in peminjaman" :key="row.label" class="text-xs">
                                    <TableCell>{{ row.label }}</TableCell>
                                    <TableCell>{{ row.value }}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader class="flex flex-row items-center justify-between">
                        <div class="flex items-center gap-2">
                            <Library class="h-5 w-5 text-primary" />
                            <CardTitle class="text-xl">Buku</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent class="space-y-2 text-sm">
                        <Table>
                            <TableRow v-for="row in Buku" :key="row.label" class="text-xs">
                                <TableCell>{{ row.label }}</TableCell>
                                <TableCell>{{ row.value }}</TableCell>
                            </TableRow>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader class="flex flex-row items-center justify-between">
                        <div class="flex items-center gap-2">
                            <Users class="h-5 w-5 text-primary" />
                            <CardTitle class="text-xl">Anggota</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent class="space-y-2 text-sm">
                        <Table>
                            <TableRow v-for="row in Pengguna" :key="row.label" class="text-xs">
                                <TableCell>{{ row.label }}</TableCell>
                                <TableCell>{{ row.value }}</TableCell>
                            </TableRow>
                        </Table>
                    </CardContent>
                </Card>

                <Card class="h-73 col-span-1 md:col-span-2">
                    <CardHeader>
                        <div class="flex items-center justify-between gap-2">
                            <CardTitle class="flex items-center text-xl">Aktivitas Peminjaman Buku Hari Ini
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow class="text-xs">
                                    <TableHead>ID</TableHead>
                                    <TableHead>Judul Buku</TableHead>
                                    <TableHead>Nama Anggota</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-for="row in recentTransactions" :key="row.id" class="text-[11px]">
                                    <TableCell>{{ row.id }}</TableCell>
                                    <TableCell>{{ row.book.judul }}</TableCell>
                                    <TableCell>{{ row.user.name }}</TableCell>
                                    <TableCell>
                                        <Badge :variant="statusVariant(row.status)">
                                            {{ row.status }}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow v-if="!recentTransactions.length">
                                    <TableCell :colspan="4" class="py-4 text-center text-muted-foreground">
                                        Tidak ada aktivitas hari ini.
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div class="flex items-center justify-between gap-2">
                            <CardTitle>Denda</CardTitle>
                        </div>
                    </CardHeader>

                    <CardContent class="space-y-4">
                        <Table>
                            <TableHeader>
                                <TableRow class="text-xs">
                                    <TableHead>Nama Anggota</TableHead>
                                    <TableHead>Total Denda</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-for="row in topDenda" :key="row.id" class="text-[11px]">
                                    <TableCell>{{ row.user.name }}</TableCell>
                                    <TableCell>{{
                                        formatRupiah(row.denda)
                                        }}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>
