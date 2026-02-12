import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DashboardAdminController::admin
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
export const admin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})

admin.definition = {
    methods: ["get","head"],
    url: '/dashboard/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DashboardAdminController::admin
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
admin.url = (options?: RouteQueryOptions) => {
    return admin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DashboardAdminController::admin
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
admin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DashboardAdminController::admin
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
admin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DashboardAdminController::admin
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
    const adminForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: admin.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DashboardAdminController::admin
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
        adminForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DashboardAdminController::admin
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
        adminForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    admin.form = adminForm
/**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::anggota
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
export const anggota = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: anggota.url(options),
    method: 'get',
})

anggota.definition = {
    methods: ["get","head"],
    url: '/dashboard/anggota',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::anggota
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
anggota.url = (options?: RouteQueryOptions) => {
    return anggota.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::anggota
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
anggota.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: anggota.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::anggota
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
anggota.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: anggota.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::anggota
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
    const anggotaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: anggota.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::anggota
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
        anggotaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: anggota.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::anggota
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
        anggotaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: anggota.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    anggota.form = anggotaForm
/**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::petugas
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
export const petugas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: petugas.url(options),
    method: 'get',
})

petugas.definition = {
    methods: ["get","head"],
    url: '/dashboard/petugas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::petugas
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
petugas.url = (options?: RouteQueryOptions) => {
    return petugas.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::petugas
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
petugas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: petugas.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::petugas
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
petugas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: petugas.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::petugas
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
    const petugasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: petugas.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::petugas
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
        petugasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: petugas.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::petugas
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
        petugasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: petugas.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    petugas.form = petugasForm
const dashboard = {
    admin: Object.assign(admin, admin),
anggota: Object.assign(anggota, anggota),
petugas: Object.assign(petugas, petugas),
}

export default dashboard