import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Feature from "../../components/featured/Feature";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    
 // const axiosInstance =  axios.create({
    //     baseURL: process.env.REACT_APP_API_URL
    // });
    


    useEffect(() =>{
     const getRandomLists = async (user) =>{
         try {
             const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                 headers:{
                    "Content-type": "application/json", 
                     token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                 }
             });
            setLists(res.data);
            await user.data.id;
         } catch (err) {
          console.log(err); 
         }
     };
     getRandomLists();
    },[type, genre]);



    return (
        <div className="home">
            <Navbar/>
            {/* <img width="100%" src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
             alt=""/> */}
            <Feature type={type} setGenre={setGenre}/>
            {lists.map((list) =>(
              <List list={list} key={list._id}/>
            ))}

            
        </div>
    )
}

export default Home
