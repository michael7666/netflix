import "./widgetsm.css"
import {Visibility} from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() =>{
      const getNewUser = async () =>{
          try {
              const res = await axios.get("/user?new=true", {
                  headers: {
                      token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
                     }
              });
              setNewUsers(res.data);
          } catch (err) {
              console.log(err);
          }
      }
      getNewUser();
  },[])
    return (
        <div className="widgetsm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
              {newUsers.map((user) =>

              <li className="widgetSmListItems">
              <img src={user.profilePic || "https://images.theabcdn.com/i/composite/%23fe9800/300x300/avatars%2Fsmile-4.svg"}
              alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
            </li>
              )}
            
            </ul>
           
      
  
        </div>
    )
}
