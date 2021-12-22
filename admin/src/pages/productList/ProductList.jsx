import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
// import {productRows} from "../../dummyData";
import { Link } from "react-router-dom";
import {  useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/ApiCalls";


export default function ProductList() {
    const {movies, dispatch} = useContext(MovieContext);


    useEffect(() =>{
      getMovies(dispatch)
    },[dispatch]);

    const handleDelete = (id) =>{
        deleteMovie(id, dispatch)
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => {
            return(
                <div className="productListUser">
                    <img className="productListImg" src={params.row.img} alt="" />
                    {params.row.title}
                </div>
            )
        } },
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'Year', width: 120 },
        { field: 'limit', headerName: 'Limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
    
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={{pathname: "/product/" + params.row._id, movie: params.row}}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row._id)}/>
                    </>
                 
                )
            }
          },
      ];
    return (
        <div className="productList">
          <DataGrid
          style={{height: '100%', width: '100%'}}
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId ={r=>r._id}
        autoHeight
      />
        </div>
    )
}
