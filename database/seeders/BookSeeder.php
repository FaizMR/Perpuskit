<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $faker = Faker::create('id_ID');
        // DB::table('books')->insert([
        //     'judul' => $faker->sentence,
        //     'penulis' => $faker->name,
        //     'penerbit' => $faker->company,
        //     'tanggal_terbit' => $faker->date('Y-m-d'),
        //     'category_id' => \App\Models\Category::inRandomOrder()->first()->id,
        //     'isbn' => $faker->isbn13,
        //     'jumlah_halaman' => $faker->numberBetween(100, 500),
        //     'deskripsi' => $faker->paragraph,
        // ]);

        Book::factory(20)->create();
    }
}
