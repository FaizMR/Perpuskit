<?php

namespace App\Services;

use App\Models\Loan;
use Illuminate\Validation\ValidationException;

class LoanPaymentService
{
    /**
     * Bayar denda
     *
     * @param Loan $loan
     * @param float $amount
     * @return Loan
     * @throws ValidationException
     */
    public function payLoan(Loan $loan, float $amount): Loan
    {
        if ($amount <= 0) {
            throw ValidationException::withMessages([
                'bayar' => 'Nominal pembayaran harus lebih besar dari 0',
            ]);
        }

        if ($amount > $loan->denda) {
            throw ValidationException::withMessages([
                'bayar' => 'Nominal pembayaran melebihi sisa denda',
            ]);
        }

        // Hitung sisa denda
        $remaining = $loan->denda - $amount;

        // Tentukan status otomatis
        $loan->status_pembayaran = $remaining == 0 ? 'lunas' : 'bayar';
        $loan->status = $loan->status_pembayaran == 'lunas' ? 'dikembalikan' : 'terlambat';
        $loan->denda = $remaining;
        $loan->save();

        return $loan;
    }
}
