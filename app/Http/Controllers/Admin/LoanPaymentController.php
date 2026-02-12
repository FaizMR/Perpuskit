<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Loan;
use App\Models\PeminjamanBuku;
use App\Services\LoanPaymentService;
use GuzzleHttp\Psr7\Query;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanPaymentController  extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $payments = Loan::with(['book', 'user'])
            ->paymentQueue()
            ->search($request->search, $request->column)
            ->latest()
            ->paginate($request->get('perPage', 7))
            ->withQueryString();

        return Inertia::render('admin/payment/Index', [
            'payments' => $payments,
            'filters' => $request->only(['search', 'column', 'perPage']),
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
    protected $service;

    public function __construct(LoanPaymentService $service)
    {
        $this->service = $service;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'loan_id' => 'required|exists:loans,id',
            'bayar'   => 'required|numeric|min:1',
        ]);

        $loan = Loan::findOrFail($validated['loan_id']);

        $this->service->payLoan($loan, $validated['bayar']);

        return redirect()->back()->with('success', 'Pembayaran denda berhasil');
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
