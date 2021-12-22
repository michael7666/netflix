export const getMoviesStart = () => ({
    type: "GET_MOVIES_START"
})


export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies
})

export const getMoviesfailure = () => ({
    type: "GET_MOVIES_FAILURE"
})




export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START"
})


export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie
})

export const createMoviefailure = () => ({
    type: "UPDATE_MOVIE_FAILURE"
})



export const updateMovieStart = () => ({
    type: "UPLOAD_MOVIE_START"
})


export const updateMovieSuccess = (movie) => ({
    type: "UPLOAD_MOVIE_SUCCESS",
    payload: movie
})

export const updateMoviefailure = () => ({
    type: "UPLOAD_MOVIE_FAILURE"
})


export const deleteMoviesStart = () => ({
    type: "DELETE_MOVIES_START"
})


export const deleteMoviesSuccess = (id) => ({
    type: "DELETE_MOVIES_SUCCESS",
    payload: id
})

export const deleteMoviesfailure = () => ({
    type: "DELETE_MOVIES_FAILURE"
})