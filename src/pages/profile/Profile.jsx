import React, { useState, useRef } from 'react';
import './profile.scss';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';
import { updateProfile, getProfileById } from "../../store/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import API_URL from "../../service";


const Profile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [profileusername, setprofileusername] = useState(" ");
  const [profilefirstname, setprofilefirstname] = useState(" ");
  const [profilelastname, setprofilelastname] = useState(" ");
  const [profileemail, setprofileemail] = useState(" ");
  const [profilepassword, setprofilepassword] = useState(" ");
  const [username, setusername] = useState(" ");
  const [firstname, setfirstname] = useState(" ");
  const [lastname, setlastname] = useState(" ");
  const [profilefile, setprofilefile] = useState(" ");
  const [profilephone, setprofilephone] = useState(" ");
  const ProfileData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      id: localStorage.getItem("user_id"),
    };
    dispatch(getProfileById(API_URL, data));
  }, [dispatch]);

  useEffect(() => {
    if (ProfileData !== null && ProfileData !== undefined) {
      if (
        ProfileData.readOneUser !== null &&
        ProfileData.readOneUser !== undefined
      ) {
        const data = ProfileData.readOneUser;
        setusername(data.username);
        setfirstname(data.last_name);
        setprofileemail(data.email);
       
      }
    }
  }, [ProfileData]);

  
  function handleprofileUpdate() {

      const formData = new FormData();

      formData.append("first_name", profilefirstname);
      formData.append("last_name", profilelastname);
      formData.append("mobile", profilephone);
      formData.append("email", profileemail);
      formData.append("password", profilepassword);
      formData.append("avatar", profilefile);
      formData.append("username", profileusername);
      formData.append("id", localStorage.getItem("user_id"));

      dispatch(updateProfile(API_URL, formData));
    } 
  

  const videoRef = useRef(null);
  const previewRef = useRef(null);
  const [isCameraActive, setCameraActive] = useState(false);

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.error('stream accessing camera:', stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
        console.error('stream accessing camera:', stream);

      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleSnapshot = () => {
    if (videoRef.current && previewRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      setProfilePic(canvas.toDataURL('image/png'));
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      setCameraActive(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setCameraActive(false);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src={profilePic}
          alt=""
          className="profilePic"
        />

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {isCameraActive && (
          <div className="cameraPreview" ref={previewRef}>
            <video ref={videoRef} autoPlay playsInline />
            <button onClick={handleSnapshot}>Take Snapshot</button>
          </div>
        )}
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="right">
            <EmailOutlinedIcon />
            <label htmlFor="fileInput" className="cameraIcon" onClick={handleCameraClick}>
              <LocalSeeOutlinedIcon />
            </label>
            <MoreVertIcon />
          </div>
        </div>
        <div className="uInfo">
          <div className="right">
            
          </div>
        </div>
        {/* <Posts/> */}
      </div>
    </div>
  );
};

export default Profile;
