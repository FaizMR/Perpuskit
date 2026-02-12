<?php

namespace App\Services;

use App\Models\Loan;
use App\Services;

class LoanExtensionRequestService
{
    public function handleExtensionApproval(Loan $loan, array $data): void
    {
        if ($data['status_perpanjangan'] === 'approved') {
            $loan->update([
                'status_perpanjangan' => 'approved',
                'tanggal_jatuh_tempo' => $data['tanggal_jatuh_tempo'],
            ]);
        }

        if ($data['status_perpanjangan'] === 'rejected') {
            $loan->update([
                'status_perpanjangan' => 'rejected',
            ]);
        }
    }
}
