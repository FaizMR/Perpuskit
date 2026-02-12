<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\StoreReturnBookRequest;
use App\Models\Loan;
use App\Models\PeminjamanBuku;
use App\Services\ReturnBookService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReturnBookController extends Controller
{

    public function __construct(
        protected ReturnBookService $Service
    ) {}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, ReturnBookService $service)
    {
        $perPage = $request->get('perPage', 7);

        $ReturnBook = $service
            ->pengembalian($request)
            ->paginate($perPage)
            ->appends($request->all());

        return Inertia::render('admin/return/Index', [
            'ReturnBook' => $ReturnBook,
            'filters' => $request->only([
                'search',
                'column',
                'sortColumn',
                'order',
                'perPage',
                'searchBy'
            ]),
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(
        StoreReturnBookRequest $request,
        ReturnBookService $service
    ) {
        $service->handle($request->validated());

        $status = $request->status;

        if ($status === 'hilang') {
            return redirect()
                ->back()
                ->with('error', 'Buku hilang, tidak dapat dikembalikan');
        }

        if ($status === 'rusak') {
            return redirect()
                ->back()
                ->with('warning_orange', 'Buku dikembalikan dalam kondisi rusak');
        }

        return redirect()
            ->back()
            ->with('success', 'Pengembalian berhasil diproses');
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
