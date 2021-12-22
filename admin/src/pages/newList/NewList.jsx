import { useContext, useEffect, useState } from "react";
import "./newList.css";
// import storage from "../../fireBase";
// import { createMovie } from "../../context/movieContext/ApiCalls";
import { MovieListContext } from "../../context/listContext/MovieListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/ApiCalls";
import { createMovieList } from "../../context/listContext/ApiCalls";
import { useHistory } from "react-router";



export default function NewList() {
  const [list, setList] = useState(null);
  
  const {dispatch} = useContext(MovieListContext);
  const {movies, dispatch: dispatchMovie} = useContext(MovieContext);
  const history = useHistory();

useEffect(()=>{
 getMovies(dispatchMovie)
},[dispatchMovie])

  const handleChange = (e) => {
    const value = e.target.value;
    setList({...list, [e.target.value]: value});
  }

  

const handleSubmit = (e) => {
  e.preventDefault();
  createMovieList(list, dispatch);
  history.push("/lists");
}


const handleSelect = (e) => {
// console.log(e.target.selectedOptions);
let value = Array.from(e.target.selectedOptions, (option) => option.value);
setList({...list, [e.target.name]: value});
}

    return (
        <div className="newProduct">
           <h1 className="newProductTitle">New List</h1>
           <form className="newProductForm" >
             {/* <div className="newProductItem">
               <label className="newProductImg">Image</label>
               <input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])}/>
             </div> */}
             {/* <div className="newProductItem">
               <label className="newProductImg">Title Image</label>
               <input type="file" id="imgTitle"  name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
             </div> */}
             {/* <div className="newProductItem">
               <label className="newProductImg">Thumbanail Image</label>
               <input type="file" id="imgSm"  name="imgSm" onChange={(e) => setImgSm(e.target.files[0])}/>
             </div> */}
             <div className="newProductItem">
               <label>Title</label>
               <input type="text" placeholder="Popular movies"  name="title" onChange={handleChange}/>
             </div>
             {/* <div className="newProductItem">
               <label>Description</label>
               <input type="text" placeholder="description"  name="desc"  onChange={handleChange}/>
             </div> */}
             <div className="newProductItem">
               <label>Type</label>
               <select name="type"  onChange={handleChange}>
                     <option>Type</option>
                       <option value="movie">Movie</option>
                       <option value="series">Series</option>
                    </select>
             </div>
             <div className="newProductItem">
               <label>Genre</label>
               <input type="text" placeholder="genre"  name="genre"  onChange={handleChange}/>
             </div>
             <div className="newProductItem">
               <label>Content</label>
               <select multiple name="content"   onChange={handleSelect} style={{height: "100px"}}>
                 {movies.map(movie =>(
                    <option key={movie._id} value={movie._id}>{movie.title}</option>
                 ))}  
                </select>
             </div>
             {/* <div className="newProductItem">
               <label>Duration</label>
               <input type="text" placeholder="duration"  name="duration"  onChange={handleChange}/>
             </div> */}
             {/* <div className="newProductItem">
               <label>Limit</label>
               <input type="text" placeholder="limit"  name="limit"  onChange={handleChange} />
             </div> */}
              {/* <div className="newProductItem">
             <label>Is Series?</label>
                    <select name="isSeries" id="isSeries"  onChange={handleChange}>
                       <option value="false">No</option>
                       <option value="true">Yes</option>
                    </select>
              </div> */}
              {/* <div className="newProductItem">
               <label>Trailer</label>
               <input type="file"  name="trailer" onChange={(e) => setTrailer(e.target.files[0])}/>
             </div>
             <div className="newProductItem">
               <label>Video</label>
               <input type="file"  name="video" onChange={(e) => setVideo(e.target.files[0])} />
             </div> */}
            
               <button className="newProductButton" onClick={handleSubmit}>Create</button>
           </form>
        </div>
    )
}
