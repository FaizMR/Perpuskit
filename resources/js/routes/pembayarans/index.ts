import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::index
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:18
 * @route '/pembayarans'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pembayarans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::index
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:18
 * @route '/pembayarans'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::index
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:18
 * @route '/pembayarans'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::index
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:18
 * @route '/pembayarans'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::index
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:18
 * @route '/pembayarans'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::index
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:18
 * @route '/pembayarans'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::index
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:18
 * @route '/pembayarans'
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
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::create
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:37
 * @route '/pembayarans/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/pembayarans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::create
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:37
 * @route '/pembayarans/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::create
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:37
 * @route '/pembayarans/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::create
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:37
 * @route '/pembayarans/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::create
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:37
 * @route '/pembayarans/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::create
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:37
 * @route '/pembayarans/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::create
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:37
 * @route '/pembayarans/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::store
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:52
 * @route '/pembayarans'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/pembayarans',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::store
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:52
 * @route '/pembayarans'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::store
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:52
 * @route '/pembayarans'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::store
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:52
 * @route '/pembayarans'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::store
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:52
 * @route '/pembayarans'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::show
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:69
 * @route '/pembayarans/{pembayaran}'
 */
export const show = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/pembayarans/{pembayaran}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::show
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:69
 * @route '/pembayarans/{pembayaran}'
 */
show.url = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pembayaran: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pembayaran: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pembayaran: args.pembayaran,
                }

    return show.definition.url
            .replace('{pembayaran}', parsedArgs.pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::show
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:69
 * @route '/pembayarans/{pembayaran}'
 */
show.get = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::show
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:69
 * @route '/pembayarans/{pembayaran}'
 */
show.head = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::show
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:69
 * @route '/pembayarans/{pembayaran}'
 */
    const showForm = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::show
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:69
 * @route '/pembayarans/{pembayaran}'
 */
        showForm.get = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::show
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:69
 * @route '/pembayarans/{pembayaran}'
 */
        showForm.head = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::edit
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:77
 * @route '/pembayarans/{pembayaran}/edit'
 */
export const edit = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/pembayarans/{pembayaran}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::edit
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:77
 * @route '/pembayarans/{pembayaran}/edit'
 */
edit.url = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pembayaran: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pembayaran: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pembayaran: args.pembayaran,
                }

    return edit.definition.url
            .replace('{pembayaran}', parsedArgs.pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::edit
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:77
 * @route '/pembayarans/{pembayaran}/edit'
 */
edit.get = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::edit
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:77
 * @route '/pembayarans/{pembayaran}/edit'
 */
edit.head = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::edit
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:77
 * @route '/pembayarans/{pembayaran}/edit'
 */
    const editForm = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::edit
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:77
 * @route '/pembayarans/{pembayaran}/edit'
 */
        editForm.get = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::edit
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:77
 * @route '/pembayarans/{pembayaran}/edit'
 */
        editForm.head = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::update
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:85
 * @route '/pembayarans/{pembayaran}'
 */
export const update = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/pembayarans/{pembayaran}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::update
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:85
 * @route '/pembayarans/{pembayaran}'
 */
update.url = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pembayaran: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pembayaran: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pembayaran: args.pembayaran,
                }

    return update.definition.url
            .replace('{pembayaran}', parsedArgs.pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::update
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:85
 * @route '/pembayarans/{pembayaran}'
 */
update.put = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::update
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:85
 * @route '/pembayarans/{pembayaran}'
 */
update.patch = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::update
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:85
 * @route '/pembayarans/{pembayaran}'
 */
    const updateForm = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::update
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:85
 * @route '/pembayarans/{pembayaran}'
 */
        updateForm.put = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::update
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:85
 * @route '/pembayarans/{pembayaran}'
 */
        updateForm.patch = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::destroy
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:93
 * @route '/pembayarans/{pembayaran}'
 */
export const destroy = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/pembayarans/{pembayaran}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::destroy
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:93
 * @route '/pembayarans/{pembayaran}'
 */
destroy.url = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pembayaran: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pembayaran: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pembayaran: args.pembayaran,
                }

    return destroy.definition.url
            .replace('{pembayaran}', parsedArgs.pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LoanPaymentController::destroy
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:93
 * @route '/pembayarans/{pembayaran}'
 */
destroy.delete = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::destroy
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:93
 * @route '/pembayarans/{pembayaran}'
 */
    const destroyForm = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LoanPaymentController::destroy
 * @see app/Http/Controllers/Admin/LoanPaymentController.php:93
 * @route '/pembayarans/{pembayaran}'
 */
        destroyForm.delete = (args: { pembayaran: string | number } | [pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const pembayarans = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default pembayarans