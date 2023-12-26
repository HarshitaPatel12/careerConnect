import React from "react";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import SidebarRight from "../SidebarRight/SidebarRight";
import "./Profile.css"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from "../navbar/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Profile() {

    

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="Profile" >
        <Navbar/>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
      <Grid item xs={0}>
        
        </Grid>
        <Grid item xs={8}>
          <Item>
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
<CardContent>
<Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component="div" >
            Your Name
        </Typography>
        <Typography variant="h5" component="div">
            Company Name
        </Typography>
    </Box>
                                    
                                </CardContent>
                </div>
            </Card>
            </div>
            <div>
            <Box sx={{ width: '100%', typography: 'body1', marginTop: "15vh" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Skills" value="1" />
            <Tab label="Experience" value="2" />
            <Tab label="Resume" value="3" />
            <Tab label="About" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
//             <div className="Profile" >
//             <Navbar/>
//             {/* <SidebarRight/> */}
//             <div>
//             <Card>
//                 <CardMedia
//                     component="img"
//                     alt="Cover Image"
//                     image="https://cdn.wallpapersafari.com/76/89/dnAJUB.jpg"
//                     className="cover-img"
//                 />
//                 <div className= "profile">
//                 <img
//                     src="https://pics.craiyon.com/2023-05-30/eaab7f873e324b3e8f41f5aba2c2aeb2.webp"
//                     alt="Profile"
//                     className="profile-photo"

// />
//                 </div>
//             </Card>
//             </div>
//             <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//         </div>
        
    );
}

export default Profile;
