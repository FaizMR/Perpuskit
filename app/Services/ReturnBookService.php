<?php

namespace App\Services;

use App\Models\Loan;
use Illuminate\Http\Request;

class ReturnBookService
{
    public function pengembalian(Request $request)
    {
        $query = Loan::with(['book', 'user'])
            ->where('status', 'dipinjam');

        if ($request->search) {
            $this->applySearch($query, $request);
        }

        if ($request->has('sortColumn') && $request->has('order')) {
            $this->applySort($query, $request);
        } else {
            $query->latest();
        }

        return $query;
    }

    protected function applySearch($query, Request $request)
    {
        $search = strtolower($request->search);
        $column = $request->column;

        if ($column === 'kode_transaksi') {
            $query->where('kode_transaksi', 'like', "%{$search}%");
        } elseif ($column === 'user_id') {
            $query->whereHas(
                'user',
                fn($q) =>
                $q->where('name', 'like', "%{$search}%")
            );
        } elseif ($column === 'judul') {
            $query->whereHas(
                'book',
                fn($q) =>
                $q->where('judul', 'like', "%{$search}%")
            );
        } else {
            $query->where(function ($q) use ($search) {
                $q->where('kode_transaksi', 'like', "%{$search}%")
                    ->orWhereHas('user', fn($q) =>
                    $q->where('name', 'like', "%{$search}%"))
                    ->orWhereHas('book', fn($q) =>
                    $q->where('judul', 'like', "%{$search}%"));
            });
        }
    }

    protected function applySort($query, Request $request)
    {
        $sort = $request->sortColumn;
        $order = $request->order;

        if ($sort === 'user_id') {
            $query->join('users', 'loans.user_id', '=', 'users.id')
                ->orderBy('users.name', $order)
                ->select('loans.*');
        } elseif ($sort === 'judul') {
            $query->join('book', 'loans.book_id', '=', 'book.id')
                ->orderBy('book.judul', $order)
                ->select('loans.*');
        } else {
            $query->orderBy($sort, $order);
        }
    }

    public function handle(array $data): void
    {
        $loan = Loan::findOrFail($data['id']);

        $loan->update([
            'status' => $data['status'],
            'status_perpanjangan' => 'none'
        ]);

        // contoh future logic
        if ($data['status'] === 'hilang') {
            // hitung denda
        }
    }
}
