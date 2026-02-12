<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use App\Http\Resources\LoanResource;
use App\Models\Loan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OverduesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $Overdues = Loan::with(['book', 'user'])
            ->Overdues()
            ->search($request->search, $request->column)
            ->sort($request->sortColumn, $request->order)
            ->FilterStatus($request->status)
            ->paginate($request->get('perPage', 7))
            ->withQueryString();

        return Inertia::render('anggota/overdues/Index', [
            'Overdues' => $Overdues,
            'filters' => $request->only('search', 'column', 'sortColumn', 'order', 'category', 'status', 'searchBy', 'perPage'),
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Loan $daftarketerlambatan)
    {
        $daftarketerlambatan->load(['book', 'user']);
        return Inertia::render('anggota/overdues/Show', [
            'currentKeterlambatan' => new LoanResource($daftarketerlambatan)
        ]);
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
