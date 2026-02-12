<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApproveLoanExtensionRequest;
use App\Models\Loan;
use App\Models\PeminjamanBuku;
use App\Services\LoanExtensionRequestService as ServicesLoanExtensionRequestService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use LoanExtensionRequestService;
use LoanService;
use LosnExtensionRequestService;

class LoanExtensionRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $ExtensionRequest = Loan::with(['book', 'user'])
            ->ExtensionRequestQueue()
            ->search($request->search, $request->column)
            ->sort($request->sortColumn, $request->order)
            ->paginate($request->get('perPage', 7))
            ->withQueryString();

        return Inertia::render('admin/request/Index', [
            'ExtensionRequest' => $ExtensionRequest,
            'filters' => $request->only('search', 'column', 'sortColumn', 'order', 'level', 'perPage', 'searchBy'),
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
        ApproveLoanExtensionRequest $request,
        ServicesLoanExtensionRequestService $loanService
    ) {
        $loan = Loan::findOrFail($request->id);
        $loanService->handleExtensionApproval($loan, $request->validated());

        return redirect()->route('permintaans.index')
            ->with(
                $request->status_perpanjangan === 'approved' ? 'success' : 'error',
                $request->status_perpanjangan === 'approved'
                    ? 'Pengajuan peminjaman berhasil diterima.'
                    : 'Pengajuan peminjaman ditolak.'
            );
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
