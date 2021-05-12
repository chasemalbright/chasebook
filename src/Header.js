import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./StateProvider"

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">

            <div className="header_left">
                <img src="https://lh6.googleusercontent.com/proxy/wGeCcpD7xB1mToE4vLE_ZW-TJvm6BHHq22axjxcRT660b6S1a2yJSeryCuRXnoy3CC9_RHpm1WFLOpABwl16H_MNkGbHczIkPft5TwGXKq_1l2BW9oOE9ZN9WZM=s0-d"/>
                <div className="header_input">
                    <SearchIcon/>
                    <input placeholder="Search Chasebook" type="text"/>
                </div>
            </div>



            <div className="header_center">

                <div className="header_option header_option-active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircleOutlinedIcon fontSize="large"/>
                </div>

            </div>




            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <div className="head_button">
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                </div>
                <div className="head_button">
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                </div>
                <div className="head_button">
                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                </div>
                <div className="head_button">
                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>
                </div>

            </div>
        
        </div>
    )
}

export default Header
