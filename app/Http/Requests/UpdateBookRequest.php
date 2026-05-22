<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'judul' => 'required|string|max:255',
            'penulis' => 'required|string|max:255',
            'penerbit' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'tanggal_terbit' => 'required|date_format:Y-m-d',
            'ISBN' => [
                'required',
                'string',
                'max:20',
            ],
            'jumlah_halaman' => 'required|integer|min:1',
            'deskripsi' => 'nullable|string',
        ];
    }
    public function messages(): array
    {
        return [
            // Validasi String & Format
            'string'    => ':attribute harus berupa teks.',

            // Validasi Keunikan & Kecocokan
            'unique'    => ':attribute sudah terdaftar sebelumnya.',

            // Validasi Panjang & Batas
            'min'       => [
                'string'   => ':attribute minimal harus :min karakter.',
            ],
            'max'       => [
                'string'   => ':attribute maksimal :max karakter.',
                'file'     => 'Ukuran :attribute maksimal 10MB.',
            ],

            // Validasi Pilihan & Database (Baru)
            'in'          => 'Pilihan :attribute tidak valid.',
            'exists'      => ':attribute yang dipilih tidak tersedia.', // Untuk category_id
            'date_format' => ':attribute harus menggunakan format YYYY-MM-DD.', // Untuk tanggal_terbit
            'integer'     => ':attribute harus berupa angka bulat.', // Untuk jumlah_halaman
        ];
    }
}
