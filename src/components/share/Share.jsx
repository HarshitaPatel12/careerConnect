import React, { useState } from "react";
import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import addCreatePost from "../../store/action/action";

const Share = () => {
  // const { currentUser } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      // Clear the selected video when an image is selected
      setSelectedVideo(null);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedVideo(file);
      // Clear the selected image when a video is selected
      setSelectedImage(null);
    }
  };

  const handleRemoveMedia = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  const handleShareClick = () => {
    // Handle the logic for sharing, including the selected image or video
    if (selectedImage) {
      console.log("Selected Image:", selectedImage);
      // Perform image upload or other necessary actions
    } else if (selectedVideo) {
      console.log("Selected Video:", selectedVideo);
      // Perform video upload or other necessary actions
    }
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            // src={currentUser.profilePic}
            alt=""
          />
          {/* <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} /> */}
          <input type="text" placeholder={`What's on your mind?`} />
        </div>
        {(selectedImage || selectedVideo) && (
          <div className="preview">
            {selectedImage && (
              <img
              width="100%" height="100%" 
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Preview"
              />
            )}
            {selectedVideo && (
              <video width="100%" height="100%" controls>
                <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <DeleteOutlineIcon onClick={handleRemoveMedia}/>
          </div>
        )}
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="imageFile"
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept="image/*"
            />
            <label htmlFor="imageFile">
              <div className="item">
                {/* <img src={Image} alt="" /> */}
                <AddPhotoAlternateOutlinedIcon/>
                <span>Add Image</span>
              </div>
            </label>
            <input
              type="file"
              id="videoFile"
              style={{ display: "none" }}
              onChange={handleVideoChange}
              accept="video/*"
            />
            <label htmlFor="videoFile">
              <div className="item">
                {/* <img src={Friend} alt="" /> */}
                <SmartDisplayOutlinedIcon/>
                <span>Add Video</span>
              </div>
            </label>
            <div className="item">
              {/* <img src={Map} alt="" /> */}
              <PersonPinCircleOutlinedIcon/>
              <span>Add Place</span>
            </div>
          </div>
          <div className="right">
            {/* <button onClick={handleShareClick}>Share</button> */}
            <ShareOutlinedIcon  onClick={handleShareClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
