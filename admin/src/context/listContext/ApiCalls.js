import axios from "axios";
import { getMovielistsStart,
     getMovielistsSuccess,
     getMovielistsfailure,
     deleteMoviesListStart,
     deleteMoviesListSuccess,
     deleteMoviesListfailure,
     createMovieListStart,
     createMovieListSuccess,
     createMovieListfailure, 
    } from "./MovieListAction";




export const getMovielist = async (dispatch) => {
    dispatch(getMovielistsStart());
    try {
       const res = await axios.get("/lists", {
           headers:{
               token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
           },
        });
        dispatch(getMovielistsSuccess(res.data));
    } catch (err) {
        dispatch(getMovielistsfailure());
    }
}



//create
export const createMovieList = async (list,dispatch) => {
    dispatch(createMovieListStart());
    try {
      const res = await axios.post("/lists", list, {
           headers:{
               token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
           },
        });
        dispatch(createMovieListSuccess(res.data));
    } catch (err) {
        dispatch(createMovieListfailure())
    }
}




 //delete
export const deleteMovieList = async (id,dispatch) => {
    dispatch(deleteMoviesListStart());
    try {
       await axios.delete("/lists/"+id, {
           headers:{
               token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
           },
        });
        dispatch(deleteMoviesListSuccess(id));
    } catch (err) {
        dispatch(deleteMoviesListfailure())
    }
}
