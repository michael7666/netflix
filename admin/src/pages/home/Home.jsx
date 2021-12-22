import React from 'react'
import FeaturedInfo from '../../component/featuredInfor/FeaturedInfo';
import Chart from "../../component/chart/Chart"
import WidgetSm from "../../component/widgetsm/WidgetSm"
import  WidgetLg from "../../component/widgetlg/WidgetLg"
import "./home.css";
// import {userData} from "../../dummyData";
import {useState, useEffect, useMemo} from "react";
import axios from "axios";

export default function Home() {
    const [userStats, setUserStats] = useState([]);
    const MONTHS = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ], []
      )
    
      useEffect(()=>{
         const getStats = async () =>{
           try {
             const res = await axios.get("/user/stats", {
               headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
               }
             });
             const statsLists = res.data.sort(function (a, b){
                 return a._id - b._id;
             })
             statsLists.map((item) => setUserStats(prev =>[...prev, {name: MONTHS[item._id - 1], "New User" : item.total}]))
           } catch (err) {
             console.log(err);
           }
         };
         getStats();
      },[MONTHS])
    return (
        <div className="home">
           <FeaturedInfo/>
           <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
           <div className="homeWidget">
               <WidgetSm/>
               <WidgetLg/>
           </div>
        </div>
    )
}
