<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Loan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardAnggotaController extends Controller
{
    public function index()
    {

        return Inertia::render('anggota/Dashboard', [
            // Buku = Total Buku + Sering Dipinjam + Buku Rusak/Hilang
            'buku' => [
                'total' => Book::count(),
                'paling_sering_dipinjam' => $this->mostBorrowedBook(),
            ],
            // Daftar Peminjaman Saya = Total Peminjaman + Telah Dikembalikan + Terlambat
            'myLoan' => [
                'dipinjam' => $this->userAuth()->whereStatus('dipinjam')->count(),
                'dikembalikan' => $this->userAuth()->whereStatus('dikembalikan')->count(),
                'terlambat' => $this->userAuth()->whereStatus('terlambat')->count(),
                'rusak_hilang' => $this->userAuth()->whereIn('status', ['rusak', 'hilang'])->count(),
            ],
            // Aktivitas Saya = Id + Judul Buku + Status
            'recentTransactions' => $this->todayTransactions(),
            // Denda = Id + Judul Buku + Denda
            'topDenda' => $this->topDenda(),
        ]);
    }
    private function mostBorrowedBook()
    {
        return Loan::select(
            'books.id',
            'books.judul',
            DB::raw('COUNT(loans.id) as total_dipinjam')
        )
            ->join('books', 'loans.book_id', '=', 'books.id')
            ->groupBy('books.id', 'books.judul')
            ->orderByDesc('total_dipinjam')
            ->first();
    }
    private function todayTransactions()
    {
        return Loan::where('user_id', Auth::id())
            ->with('book', 'user')
            ->whereDate('updated_at', today())
            ->where('status', '!=', 'terlambat')
            ->latest('updated_at')
            ->limit(3)
            ->get();
    }
    private function userAuth()
    {
        return Loan::where('user_id', Auth::id());
    }
    private function topDenda()
    {
        return Loan::where('user_id', Auth::id())
            ->with(['user', 'book'])
            ->where('denda', '>', 0)
            ->orderByDesc('denda')
            ->limit(3)
            ->get();
    }
}
