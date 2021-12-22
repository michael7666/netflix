import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContextProvider} from "./context/authContext/AuthContext";
import { MovieListContextProvider } from './context/listContext/MovieListContext';
import {MovieContextProvider} from "./context/movieContext/MovieContext";


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <MovieListContextProvider>
        <App/>
        </MovieListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


