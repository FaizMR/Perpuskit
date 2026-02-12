<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { Book, PengajuanPeminjaman, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import { BookOpen, Library } from 'lucide-vue-next';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/dashboard',
    },
];

const props = defineProps<{
    buku: {
        total: number;
        paling_sering_dipinjam: Book | null;
    };
    recentTransactions: PengajuanPeminjaman[];
    myLoan: {
        dipinjam: number;
        dikembalikan: number;
        terlambat: number;
        rusak_hilang: number;
    };
    topDenda: PengajuanPeminjaman[];
}>();
const myLoans = [
    {
        label: 'Total Dipinjam',
        value: props.myLoan.dipinjam?.toString() || 'Null',
    },
    {
        label: 'Telah Dikembalikan',
        value: props.myLoan.dikembalikan?.toString() || 'Null',
    },
    {
        label: 'Terlambat',
        value: props.myLoan.terlambat?.toString() || 'Null',
    },
];
const Buku = [
    {
        label: 'Total Buku',
        value: props.buku.total?.toString() || 'Null',
    },
    {
        label: 'Sering Dipinjam',
        value: props.buku.paling_sering_dipinjam?.judul || '0',
    },
    {
        label: 'Buku Rusak/Hilang',
        value: props.myLoan.rusak_hilang?.toString() || 'Null',
    },
];
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
const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date));
};
console.log(props);
</script>

<template>
    <Head title="Dashboard" />
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="space-y-2 bg-background p-3">
            <!-- Statistik -->
            <div
                class="mx-auto grid max-w-5xl grid-cols-1 gap-2 md:grid-cols-3"
            >
                <Card>
                    <CardHeader
                        class="flex flex-row items-center justify-between"
                    >
                        <div class="flex items-center gap-2">
                            <BookOpen class="h-5 w-5 text-primary" />
                            <CardTitle class="text-xl">Peminjaman</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent class="space-y-2 text-sm">
                        <Table>
                            <TableRow
                                v-for="row in myLoans"
                                :key="row.label"
                                class="text-xs"
                            >
                                <TableCell>{{ row.label }}</TableCell>
                                <TableCell>{{ row.value }}</TableCell>
                            </TableRow>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader
                        class="flex flex-row items-center justify-between"
                    >
                        <div class="flex items-center gap-2">
                            <Library class="h-5 w-5 text-primary" />
                            <CardTitle class="text-xl">Buku</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent class="space-y-2 text-sm">
                        <Table>
                            <TableRow
                                v-for="row in Buku"
                                :key="row.label"
                                class="text-xs"
                            >
                                <TableCell>{{ row.label }}</TableCell>
                                <TableCell>{{ row.value }}</TableCell>
                            </TableRow>
                        </Table>
                    </CardContent>
                </Card>

                <Card class="lg:row-span-2">
                    <CardHeader>
                        <div class="flex items-center justify-between gap-2">
                            <CardTitle>Denda</CardTitle>
                        </div>
                    </CardHeader>

                    <CardContent class="space-y-4">
                        <Table>
                            <TableHeader>
                                <TableRow class="text-xs">
                                    <TableHead>Judul Buku</TableHead>
                                    <TableHead>Total Denda</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow
                                    v-for="row in topDenda"
                                    :key="row.id"
                                    class="text-[11px]"
                                >
                                    <TableCell>{{ row.book.judul }}</TableCell>
                                    <TableCell>{{
                                        formatRupiah(row.denda)
                                    }}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table></CardContent
                    >
                </Card>

                <Card class="h-73 lg:col-span-2">
                    <CardHeader>
                        <div class="flex items-center justify-between gap-2">
                            <CardTitle class="flex items-center text-xl"
                                >Aktivitas Peminjaman Buku Hari Ini
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow class="text-xs">
                                    <TableHead>ID</TableHead>
                                    <TableHead>Judul Buku</TableHead>
                                    <TableHead>Jatuh Tempo</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow
                                    v-for="row in recentTransactions"
                                    :key="row.id"
                                    class="text-[11px]"
                                >
                                    <TableCell>{{ row.id }}</TableCell>
                                    <TableCell>{{ row.book.judul }}</TableCell>
                                    <TableCell>{{
                                        formatDate(row.tanggal_jatuh_tempo)
                                    }}</TableCell>

                                    <TableCell>
                                        <Badge
                                            :variant="statusVariant(row.status)"
                                        >
                                            {{ row.status }}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow v-if="!recentTransactions.length">
                                    <TableCell
                                        :colspan="4"
                                        class="py-4 text-center text-muted-foreground"
                                    >
                                        Tidak ada aktivitas hari ini.
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>
