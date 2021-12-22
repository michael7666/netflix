import "./watched.scss";
import {ArrowBackIosOutlined} from "@material-ui/icons";
import {Link, useLocation} from "react-router-dom";

export default function Watched() {
    const location = useLocation();
  const movie = location.movie;
    return (
        <div className="watch">
            <Link to="/" className="link">
            <div className="back">
                <ArrowBackIosOutlined/>
                 Home
            </div>
            </Link>
           {movie && (
            <video className="video" autoPlay progress controls 
            src={movie.video}
            />
           )} 

            
        </div>
    )
}
