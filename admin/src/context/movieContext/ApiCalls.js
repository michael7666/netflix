import axios from "axios";
import { createMoviefailure, createMovieStart, createMovieSuccess, deleteMoviesfailure, deleteMoviesStart, deleteMoviesSuccess, getMoviesfailure, getMoviesStart, getMoviesSuccess } from "./MovieAction"




export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
       const res = await axios.get("/movies", {
           headers:{
               token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
           },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (err) {
        dispatch(getMoviesfailure());
    }
}



//create
export const createMovie = async (movie,dispatch) => {
    dispatch(createMovieStart());
    try {
      const res = await axios.post("/movies", movie, {
           headers:{
               token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
           },
        });
        dispatch(createMovieSuccess(res.data));
    } catch (err) {
        dispatch(createMoviefailure())
    }
}




//delete
export const deleteMovie = async (id,dispatch) => {
    dispatch(deleteMoviesStart());
    try {
       await axios.delete("/movies/"+id, {
           headers:{
               token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
           },
        });
        dispatch(deleteMoviesSuccess(id));
    } catch (err) {
        dispatch(deleteMoviesfailure())
    }
}
