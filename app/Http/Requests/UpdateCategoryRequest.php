<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCategoryRequest extends FormRequest
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
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('categories', 'name')->ignore($this->route('category')->id),
            ],
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
        ];
    }
}
