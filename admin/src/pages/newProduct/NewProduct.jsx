import { useContext, useState } from "react";
import "./newProduct.css";
import storage from "../../fireBase";
import { createMovie } from "../../context/movieContext/ApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";



export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [video, setVideo] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const {dispatch} = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({...movie, [e.target.value]: value});
  }

  const upload = (items) =>{
    items.forEach(item =>{
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on("state_changed", snapshot =>{
      const progress =( snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("upload is" + progress + " % done ");
      },
       (err) =>{console.log(err)}, () =>{
          uploadTask.snapshot.ref.getDownloadURL().then(url =>{
            setMovie(prev=>{return {...prev, [item.label]: url}});
              setUploaded(prev => prev+1);
          });
       }
      );
    });
  };
  


const handleUploade = (e) =>{
  e.preventDefault();
  upload([
    {file: img, label: "img"},
    {file: imgTitle, label: "imgTitle"},
    {file: imgSm, label: "imgSm"},
    {file: trailer, label: "trailer"},
    {file: video, label: "video"},

  ]);
};

const handleSubmit = (e) => {
  e.preventDefault();
  createMovie(movie, dispatch)
}

    return (
        <div className="newProduct">
           <h1 className="newProductTitle">New Movies</h1>
           <form className="newProductForm" >
             <div className="newProductItem">
               <label className="newProductImg">Image</label>
               <input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])}/>
             </div>
             <div className="newProductItem">
               <label className="newProductImg">Title Image</label>
               <input type="file" id="imgTitle"  name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
             </div>
             <div className="newProductItem">
               <label className="newProductImg">Thumbanail Image</label>
               <input type="file" id="imgSm"  name="imgSm" onChange={(e) => setImgSm(e.target.files[0])}/>
             </div>
             <div className="newProductItem">
               <label>Title</label>
               <input type="text" placeholder="John Wick"  name="title" onChange={handleChange}/>
             </div>
             <div className="newProductItem">
               <label>Description</label>
               <input type="text" placeholder="description"  name="desc"  onChange={handleChange}/>
             </div>
             <div className="newProductItem">
               <label>Year</label>
               <input type="text" placeholder="year"  name="year"  onChange={handleChange}/>
             </div>
             <div className="newProductItem">
               <label>Genre</label>
               <input type="text" placeholder="genre"  name="genre"  onChange={handleChange}/>
             </div>
             <div className="newProductItem">
               <label>Duration</label>
               <input type="text" placeholder="duration"  name="duration"  onChange={handleChange}/>
             </div>
             <div className="newProductItem">
               <label>Limit</label>
               <input type="text" placeholder="limit"  name="limit"  onChange={handleChange} />
             </div>
              <div className="newProductItem">
             <label>Is Series?</label>
                    <select name="isSeries" id="isSeries"  onChange={handleChange}>
                       <option value="false">No</option>
                       <option value="true">Yes</option>
                    </select>
              </div>
              <div className="newProductItem">
               <label>Trailer</label>
               <input type="file"  name="trailer" onChange={(e) => setTrailer(e.target.files[0])}/>
             </div>
             <div className="newProductItem">
               <label>Video</label>
               <input type="file"  name="video" onChange={(e) => setVideo(e.target.files[0])} />
             </div>
             {uploaded === 5 ? (
               <button className="newProductButton" onClick={handleSubmit}>Create</button>
             ): (
              <button className="newProductButton" onClick={handleUploade} >Upload</button>
             )}
             
           </form>
        </div>
    )
}
