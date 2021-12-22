
import { createContext,  useReducer } from "react";
import MovieReducer from "./MovieReducer";


const INTITIAL_START = {
  movies: [],
    isFetching: false,
    error: false
}

export const MovieContext = createContext(INTITIAL_START);

export const MovieContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MovieReducer, INTITIAL_START);


    return <MovieContext.Provider 
    value={{
        movies: state.movies, 
        isFetching: state.isFetching,
         error: state.error,
          dispatch
        }}
    > 
        {children}
    </MovieContext.Provider>
}