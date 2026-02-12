import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Anggota\OverduesController::index
 * @see app/Http/Controllers/Anggota/OverduesController.php:15
 * @route '/daftarketerlambatans'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/daftarketerlambatans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\OverduesController::index
 * @see app/Http/Controllers/Anggota/OverduesController.php:15
 * @route '/daftarketerlambatans'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\OverduesController::index
 * @see app/Http/Controllers/Anggota/OverduesController.php:15
 * @route '/daftarketerlambatans'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\OverduesController::index
 * @see app/Http/Controllers/Anggota/OverduesController.php:15
 * @route '/daftarketerlambatans'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\OverduesController::index
 * @see app/Http/Controllers/Anggota/OverduesController.php:15
 * @route '/daftarketerlambatans'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\OverduesController::index
 * @see app/Http/Controllers/Anggota/OverduesController.php:15
 * @route '/daftarketerlambatans'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\OverduesController::index
 * @see app/Http/Controllers/Anggota/OverduesController.php:15
 * @route '/daftarketerlambatans'
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
* @see \App\Http\Controllers\Anggota\OverduesController::create
 * @see app/Http/Controllers/Anggota/OverduesController.php:34
 * @route '/daftarketerlambatans/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/daftarketerlambatans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\OverduesController::create
 * @see app/Http/Controllers/Anggota/OverduesController.php:34
 * @route '/daftarketerlambatans/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\OverduesController::create
 * @see app/Http/Controllers/Anggota/OverduesController.php:34
 * @route '/daftarketerlambatans/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\OverduesController::create
 * @see app/Http/Controllers/Anggota/OverduesController.php:34
 * @route '/daftarketerlambatans/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\OverduesController::create
 * @see app/Http/Controllers/Anggota/OverduesController.php:34
 * @route '/daftarketerlambatans/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\OverduesController::create
 * @see app/Http/Controllers/Anggota/OverduesController.php:34
 * @route '/daftarketerlambatans/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\OverduesController::create
 * @see app/Http/Controllers/Anggota/OverduesController.php:34
 * @route '/daftarketerlambatans/create'
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
* @see \App\Http\Controllers\Anggota\OverduesController::store
 * @see app/Http/Controllers/Anggota/OverduesController.php:42
 * @route '/daftarketerlambatans'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/daftarketerlambatans',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Anggota\OverduesController::store
 * @see app/Http/Controllers/Anggota/OverduesController.php:42
 * @route '/daftarketerlambatans'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\OverduesController::store
 * @see app/Http/Controllers/Anggota/OverduesController.php:42
 * @route '/daftarketerlambatans'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Anggota\OverduesController::store
 * @see app/Http/Controllers/Anggota/OverduesController.php:42
 * @route '/daftarketerlambatans'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Anggota\OverduesController::store
 * @see app/Http/Controllers/Anggota/OverduesController.php:42
 * @route '/daftarketerlambatans'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Anggota\OverduesController::show
 * @see app/Http/Controllers/Anggota/OverduesController.php:50
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
export const show = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/daftarketerlambatans/{daftarketerlambatan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\OverduesController::show
 * @see app/Http/Controllers/Anggota/OverduesController.php:50
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
show.url = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { daftarketerlambatan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    daftarketerlambatan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        daftarketerlambatan: args.daftarketerlambatan,
                }

    return show.definition.url
            .replace('{daftarketerlambatan}', parsedArgs.daftarketerlambatan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\OverduesController::show
 * @see app/Http/Controllers/Anggota/OverduesController.php:50
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
show.get = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\OverduesController::show
 * @see app/Http/Controllers/Anggota/OverduesController.php:50
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
show.head = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\OverduesController::show
 * @see app/Http/Controllers/Anggota/OverduesController.php:50
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
    const showForm = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\OverduesController::show
 * @see app/Http/Controllers/Anggota/OverduesController.php:50
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
        showForm.get = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\OverduesController::show
 * @see app/Http/Controllers/Anggota/OverduesController.php:50
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
        showForm.head = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Anggota\OverduesController::edit
 * @see app/Http/Controllers/Anggota/OverduesController.php:58
 * @route '/daftarketerlambatans/{daftarketerlambatan}/edit'
 */
export const edit = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/daftarketerlambatans/{daftarketerlambatan}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\OverduesController::edit
 * @see app/Http/Controllers/Anggota/OverduesController.php:58
 * @route '/daftarketerlambatans/{daftarketerlambatan}/edit'
 */
edit.url = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { daftarketerlambatan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    daftarketerlambatan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        daftarketerlambatan: args.daftarketerlambatan,
                }

    return edit.definition.url
            .replace('{daftarketerlambatan}', parsedArgs.daftarketerlambatan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\OverduesController::edit
 * @see app/Http/Controllers/Anggota/OverduesController.php:58
 * @route '/daftarketerlambatans/{daftarketerlambatan}/edit'
 */
edit.get = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\OverduesController::edit
 * @see app/Http/Controllers/Anggota/OverduesController.php:58
 * @route '/daftarketerlambatans/{daftarketerlambatan}/edit'
 */
edit.head = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Anggota\OverduesController::edit
 * @see app/Http/Controllers/Anggota/OverduesController.php:58
 * @route '/daftarketerlambatans/{daftarketerlambatan}/edit'
 */
    const editForm = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Anggota\OverduesController::edit
 * @see app/Http/Controllers/Anggota/OverduesController.php:58
 * @route '/daftarketerlambatans/{daftarketerlambatan}/edit'
 */
        editForm.get = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Anggota\OverduesController::edit
 * @see app/Http/Controllers/Anggota/OverduesController.php:58
 * @route '/daftarketerlambatans/{daftarketerlambatan}/edit'
 */
        editForm.head = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Anggota\OverduesController::update
 * @see app/Http/Controllers/Anggota/OverduesController.php:66
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
export const update = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/daftarketerlambatans/{daftarketerlambatan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Anggota\OverduesController::update
 * @see app/Http/Controllers/Anggota/OverduesController.php:66
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
update.url = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { daftarketerlambatan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    daftarketerlambatan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        daftarketerlambatan: args.daftarketerlambatan,
                }

    return update.definition.url
            .replace('{daftarketerlambatan}', parsedArgs.daftarketerlambatan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\OverduesController::update
 * @see app/Http/Controllers/Anggota/OverduesController.php:66
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
update.put = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Anggota\OverduesController::update
 * @see app/Http/Controllers/Anggota/OverduesController.php:66
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
update.patch = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Anggota\OverduesController::update
 * @see app/Http/Controllers/Anggota/OverduesController.php:66
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
    const updateForm = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Anggota\OverduesController::update
 * @see app/Http/Controllers/Anggota/OverduesController.php:66
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
        updateForm.put = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Anggota\OverduesController::update
 * @see app/Http/Controllers/Anggota/OverduesController.php:66
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
        updateForm.patch = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Anggota\OverduesController::destroy
 * @see app/Http/Controllers/Anggota/OverduesController.php:74
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
export const destroy = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/daftarketerlambatans/{daftarketerlambatan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Anggota\OverduesController::destroy
 * @see app/Http/Controllers/Anggota/OverduesController.php:74
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
destroy.url = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { daftarketerlambatan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    daftarketerlambatan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        daftarketerlambatan: args.daftarketerlambatan,
                }

    return destroy.definition.url
            .replace('{daftarketerlambatan}', parsedArgs.daftarketerlambatan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\OverduesController::destroy
 * @see app/Http/Controllers/Anggota/OverduesController.php:74
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
destroy.delete = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Anggota\OverduesController::destroy
 * @see app/Http/Controllers/Anggota/OverduesController.php:74
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
    const destroyForm = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Anggota\OverduesController::destroy
 * @see app/Http/Controllers/Anggota/OverduesController.php:74
 * @route '/daftarketerlambatans/{daftarketerlambatan}'
 */
        destroyForm.delete = (args: { daftarketerlambatan: string | number } | [daftarketerlambatan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const daftarketerlambatans = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default daftarketerlambatans