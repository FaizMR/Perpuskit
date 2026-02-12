import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::index
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/petugas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::index
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::index
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::index
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::index
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::index
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Petugas\DashboardPetugasController::index
 * @see app/Http/Controllers/Petugas/DashboardPetugasController.php:11
 * @route '/dashboard/petugas'
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
const DashboardPetugasController = { index }

export default DashboardPetugasController