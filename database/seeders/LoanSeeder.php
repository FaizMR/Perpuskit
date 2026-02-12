<?php

namespace Database\Seeders;

use App\Models\Loan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LoanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // DB::table("Loans")->insert([
        // 'user_id' => '1',
        // 'book_id' => '1',
        // 'kode_transaksi' => 'TRX-123456789',
        // 'tanggal_pengajuan' => now(),
        // 'tanggal_peminjaman' => now(),
        // 'tanggal_jatuh_tempo' => now(),
        // 'tanggal_pengembalian' => now(),
        // 'status' => 'pending',
        // 'status_perpanjangan' => 'none',
        // 'status_pembayaran' => 'none',
        // 'denda' => '0',
        // 'catatan' => 'tidak ada'
        // ]);
        Loan::factory(10)->create();
        Loan::factory(10)->borrowed()->create();
        Loan::factory(10)->returned()->create();
        Loan::factory(10)->late()->create();
    }
}
