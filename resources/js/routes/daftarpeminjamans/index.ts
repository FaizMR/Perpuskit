import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Anggota\LoanListController::index
 * @see app/Http/Controllers/Anggota/LoanListController.php:22
 * @route '/daftarpeminjamans'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/daftarpeminjamans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\LoanListController::index
 * @see app/Http/Controllers/Anggota/LoanListController.php:22
 * @route '/daftarpeminjamans'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanListController::index
 * @see app/Http/Controllers/Anggota/LoanListController.php:22
 * @route '/daftarpeminjamans'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\LoanListController::index
 * @see app/Http/Controllers/Anggota/LoanListController.php:22
 * @route '/daftarpeminjamans'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanListController::index
 * @see app/Http/Controllers/Anggota/LoanListController.php:22
 * @route '/daftarpeminjamans'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanListController::index
 * @see app/Http/Controllers/Anggota/LoanListController.php:22
 * @route '/daftarpeminjamans'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanListController::index
 * @see app/Http/Controllers/Anggota/LoanListController.php:22
 * @route '/daftarpeminjamans'
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
* @see \App\Http\Controllers\Anggota\LoanListController::create
 * @see app/Http/Controllers/Anggota/LoanListController.php:48
 * @route '/daftarpeminjamans/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/daftarpeminjamans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\LoanListController::create
 * @see app/Http/Controllers/Anggota/LoanListController.php:48
 * @route '/daftarpeminjamans/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanListController::create
 * @see app/Http/Controllers/Anggota/LoanListController.php:48
 * @route '/daftarpeminjamans/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\LoanListController::create
 * @see app/Http/Controllers/Anggota/LoanListController.php:48
 * @route '/daftarpeminjamans/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanListController::create
 * @see app/Http/Controllers/Anggota/LoanListController.php:48
 * @route '/daftarpeminjamans/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanListController::create
 * @see app/Http/Controllers/Anggota/LoanListController.php:48
 * @route '/daftarpeminjamans/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanListController::create
 * @see app/Http/Controllers/Anggota/LoanListController.php:48
 * @route '/daftarpeminjamans/create'
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
* @see \App\Http\Controllers\Anggota\LoanListController::store
 * @see app/Http/Controllers/Anggota/LoanListController.php:60
 * @route '/daftarpeminjamans'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/daftarpeminjamans',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Anggota\LoanListController::store
 * @see app/Http/Controllers/Anggota/LoanListController.php:60
 * @route '/daftarpeminjamans'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanListController::store
 * @see app/Http/Controllers/Anggota/LoanListController.php:60
 * @route '/daftarpeminjamans'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanListController::store
 * @see app/Http/Controllers/Anggota/LoanListController.php:60
 * @route '/daftarpeminjamans'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanListController::store
 * @see app/Http/Controllers/Anggota/LoanListController.php:60
 * @route '/daftarpeminjamans'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Anggota\LoanListController::show
 * @see app/Http/Controllers/Anggota/LoanListController.php:79
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
export const show = (args: { daftarpeminjaman: number | { id: number } } | [daftarpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/daftarpeminjamans/{daftarpeminjaman}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\LoanListController::show
 * @see app/Http/Controllers/Anggota/LoanListController.php:79
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
show.url = (args: { daftarpeminjaman: number | { id: number } } | [daftarpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { daftarpeminjaman: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { daftarpeminjaman: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    daftarpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        daftarpeminjaman: typeof args.daftarpeminjaman === 'object'
                ? args.daftarpeminjaman.id
                : args.daftarpeminjaman,
                }

    return show.definition.url
            .replace('{daftarpeminjaman}', parsedArgs.daftarpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanListController::show
 * @see app/Http/Controllers/Anggota/LoanListController.php:79
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
show.get = (args: { daftarpeminjaman: number | { id: number } } | [daftarpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\LoanListController::show
 * @see app/Http/Controllers/Anggota/LoanListController.php:79
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
show.head = (args: { daftarpeminjaman: number | { id: number } } | [daftarpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanListController::show
 * @see app/Http/Controllers/Anggota/LoanListController.php:79
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
    const showForm = (args: { daftarpeminjaman: number | { id: number } } | [daftarpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanListController::show
 * @see app/Http/Controllers/Anggota/LoanListController.php:79
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
        showForm.get = (args: { daftarpeminjaman: number | { id: number } } | [daftarpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanListController::show
 * @see app/Http/Controllers/Anggota/LoanListController.php:79
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
        showForm.head = (args: { daftarpeminjaman: number | { id: number } } | [daftarpeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Anggota\LoanListController::edit
 * @see app/Http/Controllers/Anggota/LoanListController.php:90
 * @route '/daftarpeminjamans/{daftarpeminjaman}/edit'
 */
export const edit = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/daftarpeminjamans/{daftarpeminjaman}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\LoanListController::edit
 * @see app/Http/Controllers/Anggota/LoanListController.php:90
 * @route '/daftarpeminjamans/{daftarpeminjaman}/edit'
 */
edit.url = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { daftarpeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    daftarpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        daftarpeminjaman: args.daftarpeminjaman,
                }

    return edit.definition.url
            .replace('{daftarpeminjaman}', parsedArgs.daftarpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanListController::edit
 * @see app/Http/Controllers/Anggota/LoanListController.php:90
 * @route '/daftarpeminjamans/{daftarpeminjaman}/edit'
 */
edit.get = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\LoanListController::edit
 * @see app/Http/Controllers/Anggota/LoanListController.php:90
 * @route '/daftarpeminjamans/{daftarpeminjaman}/edit'
 */
edit.head = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanListController::edit
 * @see app/Http/Controllers/Anggota/LoanListController.php:90
 * @route '/daftarpeminjamans/{daftarpeminjaman}/edit'
 */
    const editForm = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanListController::edit
 * @see app/Http/Controllers/Anggota/LoanListController.php:90
 * @route '/daftarpeminjamans/{daftarpeminjaman}/edit'
 */
        editForm.get = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanListController::edit
 * @see app/Http/Controllers/Anggota/LoanListController.php:90
 * @route '/daftarpeminjamans/{daftarpeminjaman}/edit'
 */
        editForm.head = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Anggota\LoanListController::update
 * @see app/Http/Controllers/Anggota/LoanListController.php:98
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
export const update = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/daftarpeminjamans/{daftarpeminjaman}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Anggota\LoanListController::update
 * @see app/Http/Controllers/Anggota/LoanListController.php:98
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
update.url = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { daftarpeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    daftarpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        daftarpeminjaman: args.daftarpeminjaman,
                }

    return update.definition.url
            .replace('{daftarpeminjaman}', parsedArgs.daftarpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanListController::update
 * @see app/Http/Controllers/Anggota/LoanListController.php:98
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
update.put = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Anggota\LoanListController::update
 * @see app/Http/Controllers/Anggota/LoanListController.php:98
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
update.patch = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanListController::update
 * @see app/Http/Controllers/Anggota/LoanListController.php:98
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
    const updateForm = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanListController::update
 * @see app/Http/Controllers/Anggota/LoanListController.php:98
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
        updateForm.put = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Anggota\LoanListController::update
 * @see app/Http/Controllers/Anggota/LoanListController.php:98
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
        updateForm.patch = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Anggota\LoanListController::destroy
 * @see app/Http/Controllers/Anggota/LoanListController.php:106
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
export const destroy = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/daftarpeminjamans/{daftarpeminjaman}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Anggota\LoanListController::destroy
 * @see app/Http/Controllers/Anggota/LoanListController.php:106
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
destroy.url = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { daftarpeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    daftarpeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        daftarpeminjaman: args.daftarpeminjaman,
                }

    return destroy.definition.url
            .replace('{daftarpeminjaman}', parsedArgs.daftarpeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\LoanListController::destroy
 * @see app/Http/Controllers/Anggota/LoanListController.php:106
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
destroy.delete = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Anggota\LoanListController::destroy
 * @see app/Http/Controllers/Anggota/LoanListController.php:106
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
    const destroyForm = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Anggota\LoanListController::destroy
 * @see app/Http/Controllers/Anggota/LoanListController.php:106
 * @route '/daftarpeminjamans/{daftarpeminjaman}'
 */
        destroyForm.delete = (args: { daftarpeminjaman: string | number } | [daftarpeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const daftarpeminjamans = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default daftarpeminjamans