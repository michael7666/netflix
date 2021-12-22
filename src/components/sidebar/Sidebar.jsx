import "./sidebar.css";
import {LineStyle, Timeline,
     TrendingUp, 
     MailOutline,
     DynamicFeed,
     ChatBubbleOutline,
} 
from "@material-ui/icons";
import {Link} from "react-router-dom"

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Setters</h3>
                    <ul className="sidebarLists">
                    <Link to="/" className="link">
                        <li className="sidebarListItem active">
                          <LineStyle  className="sidebarIcons"/>
                          Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                          <Timeline className="sidebarIcons"/>
                          Change Password
                        </li>
                        <li className="sidebarListItem">
                          <TrendingUp className="sidebarIcons" />
                          Account Upgrade
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarLists">
                        <li className="sidebarListItem ">
                          <MailOutline  className="sidebarIcons"/>
                          Mail
                        </li>
                        <li className="sidebarListItem">
                          <DynamicFeed className="sidebarIcons"/>
                          FeedBack
                        </li>
                        <li className="sidebarListItem">
                          <ChatBubbleOutline className="sidebarIcons" />
                          Message
                        </li>

                    </ul>
                </div>
            
            </div>
        </div>
    )
}