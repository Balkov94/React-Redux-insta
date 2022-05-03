import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
// menu icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import { Routes, Route, Link } from "react-router-dom";
//redux - logout - clear global state to show loginPage
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function IconMenu() {
     const logged = useSelector(store => store.userData.logged);
     const dispatch = useDispatch();

     const handleLogin = () => {
          dispatch({ type: "LOGOUT" });
     }


     return (
          <Paper sx={{
               width: 170,
               maxWidth: '100%',
               display: "flex",
               position: "absolute",
               top: "7vh",
               right: "0%",
               fontSize: "15px"
          }}>
               <MenuList>
                    <MenuItem>
                         <ListItemIcon>
                              <AccountCircleOutlinedIcon fontSize="small" />
                         </ListItemIcon>
                         <ListItemText>
                              <Link to="/Profile">Profile</Link>
                         </ListItemText>
                         <Typography variant="body2" color="text.secondary">
                         </Typography>
                    </MenuItem>

                    <MenuItem>
                         <ListItemIcon>
                              <BookmarkBorderOutlinedIcon fontSize="small" />
                         </ListItemIcon>
                         <ListItemText>Saved</ListItemText>
                         <Typography variant="body2" color="text.secondary">
                         </Typography>
                    </MenuItem>

                    <MenuItem>
                         <ListItemIcon>
                              <SettingsOutlinedIcon fontSize="small" />
                         </ListItemIcon>
                         <ListItemText>Settings</ListItemText>
                         <Typography variant="body2" color="text.secondary">
                         </Typography>
                    </MenuItem>

                    <MenuItem>
                         <ListItemIcon>
                              <AutorenewOutlinedIcon fontSize="small" />
                         </ListItemIcon>
                         <ListItemText>Switch Accounts</ListItemText>
                         <Typography variant="body2" color="text.secondary">

                         </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                         <ListItemIcon>
                         </ListItemIcon>
                         <ListItemText>
                              <Link to="/Loginpage" onClick={handleLogin}>Log out</Link>
                         </ListItemText>

                    </MenuItem>
               </MenuList>
          </Paper>
     );
}
