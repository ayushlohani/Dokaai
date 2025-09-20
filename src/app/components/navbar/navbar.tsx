import React from "react";
import { FiBell } from "react-icons/fi";
import { PiTreeStructure } from "react-icons/pi";
import { AppBar, Toolbar, Box, Typography, IconButton, Avatar } from "@mui/material";
import "./navbar.scss"

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: "#fff", 
        color: "#1f2937", 
        boxShadow: "0 0px 0px rgba(0,0,0,0.05)", 
        width:"80vw"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PiTreeStructure size={30} style={{ transform: "rotate(90deg)" }} className="logo"/>
          <Typography variant="h6" sx={{ fontWeight: 600 }} style={{color:"black"}}>
            Action Flow
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <FiBell size={25} />
          </IconButton>
          <Avatar
            alt="User Profile"
            src="https://mui.com/static/images/avatar/1.jpg" // replace with user img
            sx={{ width: 36, height: 36 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
