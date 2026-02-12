<?php

namespace App\Enums;

use App\Http\Controllers\Admin\DashboardAdminController;
use App\Http\Controllers\Petugas\DashboardPetugasController;
use App\Http\Controllers\Anggota\DashboardAnggotaController;
use SebastianBergmann\CodeCoverage\Test\Target\Function_;

enum LevelUser: string
{
    case ADMIN = "admin";
    case PETUGAS = "petugas";
    case ANGGOTA = "anggota";

    public function label(): string
    {
        return match ($this) {
            self::ADMIN => 'Admin',
            self::PETUGAS => 'Petugas',
            self::ANGGOTA => 'Anggota',
        };
    }

    public function getDashboardPage()
    {
        return match ($this) {
            self::ADMIN => 'dashboard.admin',
            self::PETUGAS => 'dashboard.petugas',
            self::ANGGOTA => 'dashboard.anggota',
            default => abort(403, 'Akses tidak diizinkan')
        };
    }
}
