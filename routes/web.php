<?php

use App\Enums\LevelUser;
use App\Http\Controllers\Admin\BookController;
use App\Http\Controllers\Admin\LoanPaymentController;
use App\Http\Controllers\Admin\ReturnBookController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardAdminController;
use App\Http\Controllers\Admin\LoanExtensionRequestController;
use App\Http\Controllers\Anggota\LoanListController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Anggota\BookLoanController;
use App\Http\Controllers\Anggota\DashboardAnggotaController;
use App\Http\Controllers\Anggota\LoanHistoryController;
use App\Http\Controllers\Anggota\MyrequestController;
use App\Http\Controllers\Anggota\OverduesController;
use App\Http\Controllers\Petugas\DashboardPetugasController;
use App\Http\Controllers\Petugas\LoanRequestController;
use App\Http\Controllers\Petugas\LoanStatusController;
use App\Http\Controllers\PreviewController;
use App\Http\Controllers\SelectCategory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::get('/db-test', function () {
    try {
        DB::connection()->getPdo();
        return '✅ DB CONNECTED';
    } catch (\Throwable $e) {
        return response()->json([
            '❌ DB FAILED',
            $e->getMessage()
        ], 500);
    }
});
Route::get('/', function () {
    return Inertia::render('auth/Login', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/dashboard', function () {
//         $user = Auth::user();

//         return $user->level->getDashboardPage();
//     })->name('dashboard');
// });
Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/preview/{path}', [PreviewController::class, 'show'])->where('path', '.*');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Gate::define('admin', function ($user) {
        return $user->level === LevelUser::ADMIN;
    });
    Gate::define('anggota', function ($user) {
        return $user->level === LevelUser::ANGGOTA;
    });
    Gate::define('petugas', function ($user) {
        return $user->level === LevelUser::PETUGAS;
    });
    Gate::define('petugasadmin', function ($user) {
        return in_array($user->level, [
            LevelUser::ADMIN,
            LevelUser::PETUGAS
        ]);
    });

    Route::get('/dashboard', function () {
        return redirect()->route(Auth::user()->level->getDashboardPage());
    })->name('dashboard');

    Route::get('/api/categories', [SelectCategory::class, 'index']);
    Route::put('/users/{user}/reset-password', [UserController::class, 'resetPassword'])->name('users.resetPassword');

    Route::group(['middleware' => ['auth', 'verified', 'can:admin']], function () {
        Route::get('/dashboard/admin', [DashboardAdminController::class, 'index'])
            ->name('dashboard.admin');

        Route::resource('users', UserController::class);
    });
    Route::group(['middleware' => ['auth', 'verified', 'can:anggota']], function () {
        Route::get('/dashboard/anggota', [DashboardAnggotaController::class, 'index'])
            ->name('dashboard.anggota');

        Route::resource('peminjamanbukus', BookLoanController::class);
        Route::resource('pengajuananggotas', MyrequestController::class);
        Route::resource('daftarpeminjamans', LoanListController::class);
        Route::resource('daftarketerlambatans', OverduesController::class);
        Route::resource('riwayatpeminjamans', LoanHistoryController::class);
    });
    Route::group(['middleware' => ['auth', 'verified', 'can:petugas']], function () {
        Route::get('/dashboard/petugas', [DashboardPetugasController::class, 'index'])
            ->name('dashboard.petugas');
    });
    Route::group(['middleware' => ['auth', 'verified', 'can:petugasadmin']], function () {
        Route::resource('categories', CategoryController::class);
        Route::resource('databukus', BookController::class);
        Route::resource('pengajuanpeminjamans', LoanRequestController::class);
        Route::resource('statuspeminjamans', LoanStatusController::class);
        Route::resource('permintaans', LoanExtensionRequestController::class);
        Route::resource('pengembalians', ReturnBookController::class);
        Route::resource('pembayarans', LoanPaymentController::class);
    });
});

require __DIR__ . '/settings.php';
