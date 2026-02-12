import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::index
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:17
 * @route '/riwayatpeminjamans'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/riwayatpeminjamans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::index
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:17
 * @route '/riwayatpeminjamans'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::index
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:17
 * @route '/riwayatpeminjamans'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::index
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:17
 * @route '/riwayatpeminjamans'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::index
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:17
 * @route '/riwayatpeminjamans'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::index
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:17
 * @route '/riwayatpeminjamans'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::index
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:17
 * @route '/riwayatpeminjamans'
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
* @see \App\Http\Controllers\Anggota\LoanHistoryController::create
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:36
 * @route '/riwayatpeminjamans/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/riwayatpeminjamans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::create
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:36
 * @route '/riwayatpeminjamans/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::create
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:36
 * @route '/riwayatpeminjamans/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::create
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:36
 * @route '/riwayatpeminjamans/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::create
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:36
 * @route '/riwayatpeminjamans/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::create
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:36
 * @route '/riwayatpeminjamans/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::create
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:36
 * @route '/riwayatpeminjamans/create'
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
* @see \App\Http\Controllers\Anggota\LoanHistoryController::store
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:44
 * @route '/riwayatpeminjamans'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/riwayatpeminjamans',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::store
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:44
 * @route '/riwayatpeminjamans'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::store
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:44
 * @route '/riwayatpeminjamans'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::store
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:44
 * @route '/riwayatpeminjamans'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::store
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:44
 * @route '/riwayatpeminjamans'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::show
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:52
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
export const show = (args: { riwayatpeminjaman: number | { id: number } } | [riwayatpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/riwayatpeminjamans/{riwayatpeminjaman}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::show
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:52
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
show.url = (args: { riwayatpeminjaman: number | { id: number } } | [riwayatpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { riwayatpeminjaman: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { riwayatpeminjaman: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    riwayatpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        riwayatpeminjaman: typeof args.riwayatpeminjaman === 'object'
                ? args.riwayatpeminjaman.id
                : args.riwayatpeminjaman,
                }

    return show.definition.url
            .replace('{riwayatpeminjaman}', parsedArgs.riwayatpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::show
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:52
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
show.get = (args: { riwayatpeminjaman: number | { id: number } } | [riwayatpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::show
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:52
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
show.head = (args: { riwayatpeminjaman: number | { id: number } } | [riwayatpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::show
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:52
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
    const showForm = (args: { riwayatpeminjaman: number | { id: number } } | [riwayatpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::show
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:52
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
        showForm.get = (args: { riwayatpeminjaman: number | { id: number } } | [riwayatpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::show
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:52
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
        showForm.head = (args: { riwayatpeminjaman: number | { id: number } } | [riwayatpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Anggota\LoanHistoryController::edit
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:63
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}/edit'
 */
export const edit = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/riwayatpeminjamans/{riwayatpeminjaman}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::edit
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:63
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}/edit'
 */
edit.url = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { riwayatpeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    riwayatpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        riwayatpeminjaman: args.riwayatpeminjaman,
                }

    return edit.definition.url
            .replace('{riwayatpeminjaman}', parsedArgs.riwayatpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::edit
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:63
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}/edit'
 */
edit.get = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::edit
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:63
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}/edit'
 */
edit.head = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::edit
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:63
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}/edit'
 */
    const editForm = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::edit
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:63
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}/edit'
 */
        editForm.get = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::edit
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:63
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}/edit'
 */
        editForm.head = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Anggota\LoanHistoryController::update
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:71
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
export const update = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/riwayatpeminjamans/{riwayatpeminjaman}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::update
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:71
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
update.url = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { riwayatpeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    riwayatpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        riwayatpeminjaman: args.riwayatpeminjaman,
                }

    return update.definition.url
            .replace('{riwayatpeminjaman}', parsedArgs.riwayatpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::update
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:71
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
update.put = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::update
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:71
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
update.patch = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::update
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:71
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
    const updateForm = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::update
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:71
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
        updateForm.put = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::update
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:71
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
        updateForm.patch = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Anggota\LoanHistoryController::destroy
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:79
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
export const destroy = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/riwayatpeminjamans/{riwayatpeminjaman}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::destroy
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:79
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
destroy.url = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { riwayatpeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    riwayatpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        riwayatpeminjaman: args.riwayatpeminjaman,
                }

    return destroy.definition.url
            .replace('{riwayatpeminjaman}', parsedArgs.riwayatpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::destroy
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:79
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
destroy.delete = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::destroy
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:79
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
    const destroyForm = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanHistoryController::destroy
 * @see app/Http/Controllers/Anggota/LoanHistoryController.php:79
 * @route '/riwayatpeminjamans/{riwayatpeminjaman}'
 */
        destroyForm.delete = (args: { riwayatpeminjaman: string | number } | [riwayatpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const LoanHistoryController = { index, create, store, show, edit, update, destroy }

export default LoanHistoryController