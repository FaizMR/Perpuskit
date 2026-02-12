<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

use function Symfony\Component\Clock\now;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Loan>
 */
class LoanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()?->id ?? User::factory(),
            'book_id' => Book::inRandomOrder()->first()?->id ?? Book::factory(),
            'kode_transaksi' => fake()->unique(true)->bothify('TRX-####????'),
            'tanggal_pengajuan' => fake()->date(),
            'tanggal_peminjaman' => fake()->date(),
            'tanggal_jatuh_tempo' => fake()->date(),
            'tanggal_pengembalian' => fake()->date(),
            'status' => 'pending',
            'status_perpanjangan' => 'none',
            'status_pembayaran' => 'none',
            'denda' => '0',
            'catatan' => 'tidak ada'
        ];
    }

    public function borrowed(): static
    {
        return $this->state(function () {
            $tanggalPinjam = fake()->dateTimeBetween('-7 days', 'now');

            return [
                'status' => 'dipinjam',
                'tanggal_peminjaman' => $tanggalPinjam,
                'tanggal_jatuh_tempo' => (clone $tanggalPinjam)->modify('+7 days'),
            ];
        });
    }
    public function returned(): static
    {
        return $this->state(function () {
            $tanggalPinjam = fake()->dateTimeBetween('-14 days', '-7 days');
            $tanggalPengtembalian = (clone $tanggalPinjam)->modify('+7 days');
            $jatuhTempo = (clone $tanggalPinjam)->modify('+7 days');

            return [
                'status' => 'dikembalikan',
                'tanggal_peminjaman' => $tanggalPinjam,
                'tanggal_jatuh_tempo' => $jatuhTempo,
                'tanggal_pengembalian' => fake()->dateTimeBetween($tanggalPengtembalian, 'now'),
            ];
        });
    }
    public function late(): static
    {
        return $this->state(function () {
            // 1. Tentukan tanggal pinjam & jatuh tempo
            $tanggalPinjam = fake()->dateTimeBetween('-20 days', '-14 days');
            $jatuhTempo = (clone $tanggalPinjam)->modify('+7 days');

            // 2. Hitung selisih hari
            // diff() mengembalikan object DateInterval, 'days' mengambil total selisih hari
            $selisihHari = now()->diff($jatuhTempo)->days;

            // 3. Hitung denda (1rb per hari)
            $totalDenda = $selisihHari * 1000;

            return [
                'status' => 'terlambat',
                'tanggal_peminjaman' => $tanggalPinjam,
                'tanggal_jatuh_tempo' => $jatuhTempo,
                'denda' => $totalDenda,
                'status_pembayaran' => 'none',
            ];
        });
    }
}
