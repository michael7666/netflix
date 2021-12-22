import "./listItem.scss";
import {useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import {PlayArrow, Add,ThumbUpAltOutlined,ThumbDownAltOutlined} from "@material-ui/icons";
import axios from "axios";


export default function ListItem({index, item}) {

    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState("");
    const componentMoounted = useRef(true);
   
    // const axiosInstance =  axios.create({
    //     baseURL: process.env.REACT_APP_API_URL
    // });
   
  
    useEffect(()=>{
     const getMovie = async () =>{
        try {
             if(componentMoounted.current){
                const res = await axios.get("/movies/find/" + item, {
                    headers:{
                        "Content-type": "application/json",
                         token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                setMovie(res.data);
              
             }
            
            
        } catch (err) {
            console.log(err);
        }
     };
     getMovie();

     return () =>{
         componentMoounted.current = false;
     }

    },[item]);
  
   
    return (
        <Link to={{pathname:"/watched", movie: movie}}>
        <div className="listItem" 
        style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={()=>setIsHovered(true)}
         onMouseLeave={()=>setIsHovered(false)}>
             <img 
             src={movie?.img} alt=""/>
             {isHovered && (
                <>
                     <video src={movie?.trailer} autoPlay={true} loop/>
            <div className="itemInfo">
               <div className="icons">
                   <PlayArrow className="icon"/>
                   <Add className="icon"/>
                   <ThumbUpAltOutlined className="icon"/>
                   <ThumbDownAltOutlined className="icon"/>
               </div>
               <div className="itemInfoTop">
                      <span>{movie?.duration}</span>
                      <span className="limit">+{movie?.limit}</span>
                    <span>{movie?.year}</span>
               </div>
               <div className="desc">
                   {movie?.desc}
                    
               </div>
              
                <div className="genre">{movie?.genre}</div>
            </div>
            </>
            )}
        </div>
        </Link>
    )
}
