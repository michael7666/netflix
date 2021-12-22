
import { createContext,  useReducer } from "react";
import MovieListReducer from "./MovieListReducer";


const INTITIAL_START = {
  lists: [],
    isFetching: false,
    error: false
}

export const MovieListContext = createContext(INTITIAL_START);

export const MovieListContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MovieListReducer, INTITIAL_START);


    return <MovieListContext.Provider 
    value={{
        lists: state.lists, 
        isFetching: state.isFetching,
         error: state.error,
          dispatch
        }}
    > 
        {children}
    </MovieListContext.Provider>
}