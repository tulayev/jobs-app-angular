<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QualificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('qualifications')->insert([
            [
                'name' => 'Junior',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Middle',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Senior',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Lead',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
