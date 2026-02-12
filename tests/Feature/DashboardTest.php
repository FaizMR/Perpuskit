<?php

use App\Enums\LevelUser;
use App\Models\User;

test('guests are redirected to the login page', function () {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('authenticated users can visit the dashboard', function () {

    // Untuk tanpa role / level
    // $user = User::factory()->create();
    // $this->actingAs($user);

    // $response = $this->get(route('dashboard'));
    // $response->assertStatus(200);

    // Untuk menggunakan role / level (cukup mengecek / test 1 role / level saja)
    $user = User::factory()->create([
        'level' => LevelUser::PETUGAS,
    ]);

    $this->actingAs($user, 'web')
        ->get('/dashboard')
        ->assertRedirect(route('dashboard.petugas'));

    $this->actingAs($user, 'web')
        ->get(route('dashboard.petugas'))
        ->assertOk();
});
