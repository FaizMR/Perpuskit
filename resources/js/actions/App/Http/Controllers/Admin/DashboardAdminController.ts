import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DashboardAdminController::index
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DashboardAdminController::index
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DashboardAdminController::index
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DashboardAdminController::index
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DashboardAdminController::index
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DashboardAdminController::index
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DashboardAdminController::index
 * @see app/Http/Controllers/Admin/DashboardAdminController.php:15
 * @route '/dashboard/admin'
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
const DashboardAdminController = { index }

export default DashboardAdminController