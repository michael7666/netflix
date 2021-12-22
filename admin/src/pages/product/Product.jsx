import "./product.css"
import {Link, useLocation} from "react-router-dom";
// import Chart from "../../component/chart/Chart";
// import {productData} from "../../dummyData";
import {Publish} from "@material-ui/icons"

export default function Product() {
  const location = useLocation();
  const movie = location.movie;
  
    return (
        <div className="product">
            <div className="productTitleContainer">
              <h2 className="productTitle">Movies</h2>
              <Link to="/newProduct">
               <button className="productAddButton">Create</button>
               </Link>
            </div>
            <div className="productTop">
              {/* <div className="productTopLeft">
               <Chart data={productData} dataKey="Sales" title="Sales Proformance"/>
              </div> */}
              <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={movie.img}
                     alt="" className="productInfoImg" />
                     <span className="productInfoName">{movie.title}</span>
                </div>
                 <div className="productInfoBotton">
                    <div className="productInfoItems">
                      <span className="productInfoKey" >id:</span>
                      <span className="productInfoValue" >{movie._id}</span>
                    </div>
                    <div className="productInfoItems">
                      <span className="productInfoKey" >Genre:</span>
                      <span className="productInfoValue" >{movie.genre}</span>
                    </div>
                    <div className="productInfoItems">
                      <span className="productInfoKey" >year:</span>
                      <span className="productInfoValue" >{movie.year}</span>
                    </div>
                    <div className="productInfoItems">
                      <span className="productInfoKey" >limit:</span>
                      <span className="productInfoValue" >{movie.limit}</span>
                    </div>
                 </div>
              </div>
            </div>
             <div className="productBottom">
                <form className="productForm">
                 <div className="productFormLeft">
                   <label>Movie Title</label>
                   <input type="text" placeholder={movie.title}/>
                    <label>Year</label>
                    <input type="text" placeholder={movie.year}/>
                    <label>Genre</label>
                    <input type="text" placeholder={movie.genre}/>
                    <label>Limit</label>
                    <input type="text" placeholder={movie.limit}/>
                    <label>Trailer</label>
                    <input type="file" placeholder={movie.trailer}/>
                    <label>Video</label>
                    <input type="file" placeholder={movie.video}/>
                 </div>
                <div className="productFormRight">
                  <div className="productUpload">
                     <img src={movie.img} 
                     alt="" className="productUploadImg"/>
                     <label for="file">
                      <Publish/>
                     </label>
                     <input type="file" id="file" style={{display: "none"}}/>
                  </div>
                  <button className="productBotton">Update</button>
                </div>
                </form>
             </div>
        </div>
    )
}
