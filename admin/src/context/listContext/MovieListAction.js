export const getMovielistsStart = () => ({
    type: "GET_LISTS_START"
})


export const getMovielistsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists
})

export const getMovielistsfailure = () => ({
    type: "GET_LISTS_FAILURE"
})




export const createMovieListStart = () => ({
    type: "CREATE_MOVIE_LIST_START"
})


export const createMovieListSuccess = (list) => ({
    type: "CREATE_MOVIE_LIST_SUCCESS",
    payload: list
})

export const createMovieListfailure = () => ({
    type: "CREATE_MOVIE_LIST_FAILURE"
})



export const updateMovieListStart = () => ({
    type: "UPLOAD_MOVIE_LIST_START"
})


export const updateMovieListSuccess = (list) => ({
    type: "UPLOAD_MOVIE_LIST_SUCCESS",
    payload: list
})

export const updateMovieListfailure = () => ({
    type: "UPLOAD_MOVIE_LIST_FAILURE"
})


export const deleteMoviesListStart = () => ({
    type: "DELETE_MOVIES_LISTS_START"
})


export const deleteMoviesListSuccess = (id) => ({
    type: "DELETE_MOVIES_LISTS_SUCCESS",
    payload: id
})

export const deleteMoviesListfailure = () => ({
    type: "DELETE_MOVIES_LISTS_FAILURE"
})