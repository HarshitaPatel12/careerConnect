import React from "react";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import SidebarRight from "../SidebarRight/SidebarRight";
import "./Profile.css"


function Profile() {
    return (
        <div className="Profile" >
            {/* <SidebarRight/> */}
            <div>
            <Card>
                <CardMedia
                    component="img"
                    alt="Cover Image"
                    image="https://cdn.wallpapersafari.com/76/89/dnAJUB.jpg"
                    className="cover-img"
                />
                <div className= "profile">
                <img
                    src="https://pics.craiyon.com/2023-05-30/eaab7f873e324b3e8f41f5aba2c2aeb2.webp"
                    alt="Profile"
                    className="profile-photo"

/>
                </div>
            </Card>
            </div>
        </div>
    );
}

export default Profile;
