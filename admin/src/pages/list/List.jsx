import "./list.css"
import {Link, useLocation} from "react-router-dom";
// import Chart from "../../component/chart/Chart";
// import {productData} from "../../dummyData";
// import {Publish} from "@material-ui/icons"

export default function List() {
  const location = useLocation();
  const list = location.list;
  
    return (
        <div className="product">
            <div className="productTitleContainer">
              <h2 className="productTitle">Lists</h2>
              <Link to="/newList">
               <button className="productAddButton">Create</button>
               </Link>
            </div>
            <div className="productTop">
              {/* <div className="productTopLeft">
               <Chart data={productData} dataKey="Sales" title="Sales Proformance"/>
              </div> */}
              <div className="productTopRight">
                <div className="productInfoTop">
                     <span className="productInfoName">{list.title}</span>
                </div>
                 <div className="productInfoBotton">
                    <div className="productInfoItems">
                      <span className="productInfoKey" >id:</span>
                      <span className="productInfoValue" >{list._id}</span>
                    </div>
                    <div className="productInfoItems">
                      <span className="productInfoKey" >Genre:</span>
                      <span className="productInfoValue" >{list.genre}</span>
                    </div>
                    <div className="productInfoItems">
                      <span className="productInfoKey" >type:</span>
                      <span className="productInfoValue" >{list.type}</span>
                    </div>
                 </div>
              </div>
            </div>
             <div className="productBottom">
                <form className="productForm">
                 <div className="productFormLeft">
                   <label>List Title</label>
                   <input type="text" placeholder={list.title}/>
                    <label>Type</label>
                    <input type="text" placeholder={list.type}/>
                    <label>Genre</label>
                    <input type="text" placeholder={list.genre}/>
                 </div>
                <div className="productFormRight">
                  <button className="productBotton">Update</button>
                </div>
                </form>
             </div>
        </div>
    )
}
