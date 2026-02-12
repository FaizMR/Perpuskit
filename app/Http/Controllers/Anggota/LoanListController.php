<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoanListRequest;
use App\Http\Resources\LoanResource;
use App\Http\Resources\PeminjamanBukuResource;
use App\Models\Category;
use App\Models\DataBuku;
use App\Models\Loan;
use App\Models\PeminjamanBuku;
use App\Services\LoanListService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $LoanList = Loan::with(['book', 'user'])
            ->forUser(auth()->id())
            ->search($request->search, $request->column)
            ->sort($request->sortColumn, $request->order)
            ->paginate($request->get('per_page', 7))
            ->withQueryString();

        return Inertia::render('anggota/loanlist/Index', [
            'loanResource' => $LoanList,
            'filters' => $request->only([
                'search',
                'column',
                'sortColumn',
                'order',
                'statusSearch',
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
    public function __construct(
        protected LoanListService $service
    ) {}

    public function store(LoanListRequest $request)
    {
        try {
            $this->service->requestExtension(
                $request->book_id,
                auth()->id()
            );

            return redirect()
                ->back()
                ->with('success', 'Pengajuan perpanjangan berhasil dikirim.');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Loan $daftarpeminjaman)
    {
        $daftarpeminjaman->load(['book', 'book.category']);
        return Inertia::render('anggota/loanlist/Show', [
            'currentPengajuan' => new LoanResource($daftarpeminjaman),
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
