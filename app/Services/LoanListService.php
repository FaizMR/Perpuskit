<?php

namespace App\Services;

use App\Models\Book;
use App\Models\Loan;

class LoanListService
{
    public function requestExtension(int $bookId, int $userId): void
    {
        $loan = Loan::where('book_id', $bookId)
            ->where('user_id', $userId)
            ->where('status', 'dipinjam')
            ->first();

        if (!$loan) {
            throw new \Exception('Data peminjaman tidak ditemukan.');
        }

        if ($loan->status_perpanjangan === 'pending') {
            throw new \Exception('Perpanjangan sudah diajukan sebelumnya.');
        }

        $loan->update([
            'status_perpanjangan' => 'pending',
        ]);
    }
}
