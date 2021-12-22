import "./movieList.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
// import {productRows} from "../../dummyData";
import { Link } from "react-router-dom";
import {  useContext, useEffect } from "react";
import { MovieListContext } from "../../context/listContext/MovieListContext";
import { deleteMovieList, getMovielist } from "../../context/listContext/ApiCalls";



export default function MovieList() {
    const {lists, dispatch} = useContext(MovieListContext);



    useEffect(() =>{
        getMovielist(dispatch)
    },[dispatch]);

    const handleDelete = (id) =>{
        deleteMovieList(id, dispatch)
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'title', headerName: 'title', width: 250 },
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'type', headerName: 'type', width: 150 },
    
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={{pathname: "/list/" + params.row._id, list: params.row}}>
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
        rows={lists}
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
