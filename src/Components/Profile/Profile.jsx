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
import trofe from "../../assets/MicrosoftTeams-image (7).png";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  
  

function Profile() {


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1,  backgroundColor: '#e7ddfb3b', height: "100vh"}}>
        {/* <Navbar /> */}
        <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center', marginTop: '0vh'}}>
          <Grid item xs={12} md={8} lg={8}>
            <Item>
                <div>
           
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
                <CardContent>
                    <Typography variant="subtitle1" component="div">
                      Your Name | Company Name | Address: Your Address
                      <button type="button" class="btn btn-success">Edit</button>                    </Typography>
                    
                     {/* <Typography variant="subtitle1" component="div"sx={{ display: 'flex', justifyContent: 'space-between' }}>
 <span sx={{marginLeft: "3vh"}}> Your Name | Company Name | Address: Your Address</span>
    <button type="button" className="btn btn-secondary">Edit</button>

</Typography> */}
                  </CardContent>
                  <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Skills" value="1" />
            <Tab label="Experience" value="2" />
            <Tab label="Resume" value="3" />
            <Tab label="About" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</TabPanel>
        <TabPanel value="2">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</TabPanel>
        <TabPanel value="3">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</TabPanel>
      </TabContext>
    </Box>
           
            </div>
            

            </Item>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Item>
            <div>

                <div className= "trofie">
                <img
                    src={trofe}
                    alt="Profile"
                    className="trofie"

/>


                </div>
                <CardContent>
                    <Typography variant="subtitle1" component="div">
                      Upgrade to Pro
                                  </Typography>
                                  <Typography variant="subtitle1" component="div">
                                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                                  </Typography>
                                  
                    
                  </CardContent>
                
            
            </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

        
    );
}

export default Profile;
