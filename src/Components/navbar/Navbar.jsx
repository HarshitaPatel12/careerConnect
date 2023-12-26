import "../navbar/navbar.css";
import React, { useState, useRef } from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
// import { AuthContext } from "../context/authContext";
import lightLogo from "../../assets/CareerConnect-black-logo.png";
import darkLogo from "../../assets/CareerConnect-white-logo.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileById } from "../../store/action/action";
import API_URL from "../../service";
import IMAGE_PATH from "../../service";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  // const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.user.readOneUser);
  const [username, setusername] = useState(" ");

  useEffect(() => {
    const data = {
      id: localStorage.getItem("user_id"),
    };
    
    dispatch(getProfileById(API_URL, data));
  }, [dispatch]);

  useEffect(() => {
    if (profileData !== null && profileData !== undefined) {
      if (
        profileData.readOneUser !== null &&
        profileData.readOneUser !== undefined
      ) {
        const data = profileData.readOneUser;
        setusername(data.username);
       
       
      }
    }
  }, [profileData]);

 const navigate = useNavigate()
 const handleProfile =()=>{
  navigate("/profile");
 }
 const handleHome =()=>{
  navigate("/");
 }
 const handlePost =()=>{
  navigate("/profile/:id");
 }
  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : ''}`} style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#333' }}>
    <div className="left">
        {/* <Link to="/" style={{ textDecoration: "none" }}>
        <img className="cclogo" src={logo} alt="" />
          
        </Link> */}
          {darkMode ? (
          <img className="cclogo" src={darkLogo} alt=""  />
        ) : (
          <img className="cclogo" src={lightLogo} alt=""  />
        )}
        <HomeOutlinedIcon onClick={handleHome} />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <BusinessOutlinedIcon onClick={handlePost} />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
       
        <PersonOutlinedIcon onClick={handleProfile} />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
        <img
    src={
      profileData?.readOneUser?.profilePic
        ? IMAGE_PATH + "user/" + profileData.readOneUser.profilePic
        : "defaultImagePath" 
    }
    alt="sunil"
    className="chat_profile"
  />
          <span>{profileData && profileData.username}</span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
