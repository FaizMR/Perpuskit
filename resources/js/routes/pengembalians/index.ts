import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ReturnBookController::index
 * @see app/Http/Controllers/Admin/ReturnBookController.php:23
 * @route '/pengembalians'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pengembalians',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::index
 * @see app/Http/Controllers/Admin/ReturnBookController.php:23
 * @route '/pengembalians'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::index
 * @see app/Http/Controllers/Admin/ReturnBookController.php:23
 * @route '/pengembalians'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReturnBookController::index
 * @see app/Http/Controllers/Admin/ReturnBookController.php:23
 * @route '/pengembalians'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnBookController::index
 * @see app/Http/Controllers/Admin/ReturnBookController.php:23
 * @route '/pengembalians'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::index
 * @see app/Http/Controllers/Admin/ReturnBookController.php:23
 * @route '/pengembalians'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::index
 * @see app/Http/Controllers/Admin/ReturnBookController.php:23
 * @route '/pengembalians'
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
* @see \App\Http\Controllers\Admin\ReturnBookController::create
 * @see app/Http/Controllers/Admin/ReturnBookController.php:49
 * @route '/pengembalians/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/pengembalians/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::create
 * @see app/Http/Controllers/Admin/ReturnBookController.php:49
 * @route '/pengembalians/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::create
 * @see app/Http/Controllers/Admin/ReturnBookController.php:49
 * @route '/pengembalians/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReturnBookController::create
 * @see app/Http/Controllers/Admin/ReturnBookController.php:49
 * @route '/pengembalians/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnBookController::create
 * @see app/Http/Controllers/Admin/ReturnBookController.php:49
 * @route '/pengembalians/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::create
 * @see app/Http/Controllers/Admin/ReturnBookController.php:49
 * @route '/pengembalians/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::create
 * @see app/Http/Controllers/Admin/ReturnBookController.php:49
 * @route '/pengembalians/create'
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
* @see \App\Http\Controllers\Admin\ReturnBookController::store
 * @see app/Http/Controllers/Admin/ReturnBookController.php:57
 * @route '/pengembalians'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/pengembalians',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::store
 * @see app/Http/Controllers/Admin/ReturnBookController.php:57
 * @route '/pengembalians'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::store
 * @see app/Http/Controllers/Admin/ReturnBookController.php:57
 * @route '/pengembalians'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnBookController::store
 * @see app/Http/Controllers/Admin/ReturnBookController.php:57
 * @route '/pengembalians'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::store
 * @see app/Http/Controllers/Admin/ReturnBookController.php:57
 * @route '/pengembalians'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ReturnBookController::show
 * @see app/Http/Controllers/Admin/ReturnBookController.php:86
 * @route '/pengembalians/{pengembalian}'
 */
export const show = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/pengembalians/{pengembalian}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::show
 * @see app/Http/Controllers/Admin/ReturnBookController.php:86
 * @route '/pengembalians/{pengembalian}'
 */
show.url = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengembalian: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pengembalian: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengembalian: args.pengembalian,
                }

    return show.definition.url
            .replace('{pengembalian}', parsedArgs.pengembalian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::show
 * @see app/Http/Controllers/Admin/ReturnBookController.php:86
 * @route '/pengembalians/{pengembalian}'
 */
show.get = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReturnBookController::show
 * @see app/Http/Controllers/Admin/ReturnBookController.php:86
 * @route '/pengembalians/{pengembalian}'
 */
show.head = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnBookController::show
 * @see app/Http/Controllers/Admin/ReturnBookController.php:86
 * @route '/pengembalians/{pengembalian}'
 */
    const showForm = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::show
 * @see app/Http/Controllers/Admin/ReturnBookController.php:86
 * @route '/pengembalians/{pengembalian}'
 */
        showForm.get = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::show
 * @see app/Http/Controllers/Admin/ReturnBookController.php:86
 * @route '/pengembalians/{pengembalian}'
 */
        showForm.head = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ReturnBookController::edit
 * @see app/Http/Controllers/Admin/ReturnBookController.php:94
 * @route '/pengembalians/{pengembalian}/edit'
 */
export const edit = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/pengembalians/{pengembalian}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::edit
 * @see app/Http/Controllers/Admin/ReturnBookController.php:94
 * @route '/pengembalians/{pengembalian}/edit'
 */
edit.url = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengembalian: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pengembalian: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengembalian: args.pengembalian,
                }

    return edit.definition.url
            .replace('{pengembalian}', parsedArgs.pengembalian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::edit
 * @see app/Http/Controllers/Admin/ReturnBookController.php:94
 * @route '/pengembalians/{pengembalian}/edit'
 */
edit.get = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReturnBookController::edit
 * @see app/Http/Controllers/Admin/ReturnBookController.php:94
 * @route '/pengembalians/{pengembalian}/edit'
 */
edit.head = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnBookController::edit
 * @see app/Http/Controllers/Admin/ReturnBookController.php:94
 * @route '/pengembalians/{pengembalian}/edit'
 */
    const editForm = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::edit
 * @see app/Http/Controllers/Admin/ReturnBookController.php:94
 * @route '/pengembalians/{pengembalian}/edit'
 */
        editForm.get = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::edit
 * @see app/Http/Controllers/Admin/ReturnBookController.php:94
 * @route '/pengembalians/{pengembalian}/edit'
 */
        editForm.head = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ReturnBookController::update
 * @see app/Http/Controllers/Admin/ReturnBookController.php:102
 * @route '/pengembalians/{pengembalian}'
 */
export const update = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/pengembalians/{pengembalian}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::update
 * @see app/Http/Controllers/Admin/ReturnBookController.php:102
 * @route '/pengembalians/{pengembalian}'
 */
update.url = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengembalian: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pengembalian: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengembalian: args.pengembalian,
                }

    return update.definition.url
            .replace('{pengembalian}', parsedArgs.pengembalian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::update
 * @see app/Http/Controllers/Admin/ReturnBookController.php:102
 * @route '/pengembalians/{pengembalian}'
 */
update.put = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\ReturnBookController::update
 * @see app/Http/Controllers/Admin/ReturnBookController.php:102
 * @route '/pengembalians/{pengembalian}'
 */
update.patch = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnBookController::update
 * @see app/Http/Controllers/Admin/ReturnBookController.php:102
 * @route '/pengembalians/{pengembalian}'
 */
    const updateForm = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::update
 * @see app/Http/Controllers/Admin/ReturnBookController.php:102
 * @route '/pengembalians/{pengembalian}'
 */
        updateForm.put = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::update
 * @see app/Http/Controllers/Admin/ReturnBookController.php:102
 * @route '/pengembalians/{pengembalian}'
 */
        updateForm.patch = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\ReturnBookController::destroy
 * @see app/Http/Controllers/Admin/ReturnBookController.php:110
 * @route '/pengembalians/{pengembalian}'
 */
export const destroy = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/pengembalians/{pengembalian}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::destroy
 * @see app/Http/Controllers/Admin/ReturnBookController.php:110
 * @route '/pengembalians/{pengembalian}'
 */
destroy.url = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengembalian: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pengembalian: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengembalian: args.pengembalian,
                }

    return destroy.definition.url
            .replace('{pengembalian}', parsedArgs.pengembalian.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReturnBookController::destroy
 * @see app/Http/Controllers/Admin/ReturnBookController.php:110
 * @route '/pengembalians/{pengembalian}'
 */
destroy.delete = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnBookController::destroy
 * @see app/Http/Controllers/Admin/ReturnBookController.php:110
 * @route '/pengembalians/{pengembalian}'
 */
    const destroyForm = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnBookController::destroy
 * @see app/Http/Controllers/Admin/ReturnBookController.php:110
 * @route '/pengembalians/{pengembalian}'
 */
        destroyForm.delete = (args: { pengembalian: string | number } | [pengembalian: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const pengembalians = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default pengembalians