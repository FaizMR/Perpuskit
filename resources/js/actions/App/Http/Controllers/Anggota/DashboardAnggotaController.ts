import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::index
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/anggota',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::index
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::index
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::index
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::index
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::index
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\DashboardAnggotaController::index
 * @see app/Http/Controllers/Anggota/DashboardAnggotaController.php:15
 * @route '/dashboard/anggota'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const DashboardAnggotaController = { index }

export default DashboardAnggotaController