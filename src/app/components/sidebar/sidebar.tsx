import React, { useState } from "react";
import "./sidebar.css";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  MdTune,
  MdOutlineGroupWork,
  MdOutlineArticle,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { PiTreeStructure } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { RiHome6Line } from "react-icons/ri";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";
import { FiChevronsLeft, FiChevronsRight, FiTarget } from "react-icons/fi";

const drawerWidth = 240;
const collapsedWidth = 70;

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: showSideBar ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: showSideBar ? drawerWidth : collapsedWidth,
          boxSizing: "border-box",
          backgroundColor: "#fff",
          color: "#333",
          borderRight: "1px solid #e5e7eb",
          overflowX: "hidden",
          transition: "width 0.3s ease",
        },
      }}
    >
      {/* Top Logo + Toggle */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: showSideBar ? "space-between" : "center",
        }}
      >
        {showSideBar && (
          <Typography variant="body1" fontWeight="bold">
             <img src="/Dokaai_Logo.png" style={{width:"60px"}}></img>
          </Typography>
        )}
        <IconButton onClick={() => setShowSideBar(!showSideBar)} size="small">
          {showSideBar ? <FiChevronsLeft /> : <FiChevronsRight />}
        </IconButton>
      </Box>

      {/* Project Info */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: showSideBar ? "flex-start" : "center",
          gap: 1,
        }}
      >
        <span className="logo-sidebar">AB</span>
        {showSideBar && (
          <Typography variant="body1" fontWeight="bold">
            Project name
          </Typography>
        )}
      </Box>

      <Divider />

      <List>
        <Tooltip title={!showSideBar ? "Dashboard" : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              <RiHome6Line size={20} color="#444" />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Dashboard" />}
          </ListItemButton>
        </Tooltip>

        <Tooltip title={!showSideBar ? "Services" : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              <MdOutlineSpaceDashboard size={20} color="#444" />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Services" />}
          </ListItemButton>
        </Tooltip>

        <Tooltip title={!showSideBar ? "Configurations" : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              <MdTune size={20} color="#444" style={{ transform: "rotate(90deg)" }} />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Configurations" />}
          </ListItemButton>
        </Tooltip>

        <Tooltip title={!showSideBar ? "Members" : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              <RxPerson size={20} color="#444" />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Members" />}
          </ListItemButton>
        </Tooltip>

        <Divider sx={{ my: 1 }} />

        {showSideBar && (
          <Typography variant="caption" sx={{ pl: 2, pb: 1, color: "#888" }}>
            NOTIFICATION
          </Typography>
        )}

        <Tooltip title={!showSideBar ? "Notification Handler" : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              <IoCalendarClearOutline size={20} color="#444" />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Notification Handler" />}
          </ListItemButton>
        </Tooltip>

        <Tooltip title={!showSideBar ? "Action flow" : ""} placement="right">
          <ListItemButton
            sx={{
              backgroundColor: "#E2F3EF",
              borderLeft: showSideBar ? "4px solid #16a34a" : "none",
              "& .MuiListItemText-primary": { color: "#389F7F" },
              "& svg": { color: "#389F7F" },
            }}
          >
            <ListItemIcon>
              <PiTreeStructure size={20} style={{ transform: "rotate(90deg)" }} />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Action flow" />}
          </ListItemButton>
        </Tooltip>

        <Tooltip title={!showSideBar ? "Groups" : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              <FiTarget size={20} color="#444" />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Groups" />}
          </ListItemButton>
        </Tooltip>

        <Tooltip title={!showSideBar ? "Templates" : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              <MdOutlineArticle size={20} color="#444" />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Templates" />}
          </ListItemButton>
        </Tooltip>

        <Tooltip title={!showSideBar ? "Customers" : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              <BiGroup size={20} color="#444" />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Customers" />}
          </ListItemButton>
        </Tooltip>

        <Tooltip title={!showSideBar ? "Logs" : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              <LuClock3 size={20} color="#444" />
            </ListItemIcon>
            {showSideBar && <ListItemText primary="Logs" />}
          </ListItemButton>
        </Tooltip>
      </List>

      {/* Bottom Google Account */}
      <Box
        sx={{
          mt: "auto",
          p: 2,
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: showSideBar ? "flex-start" : "center",
          gap: 1,
        }}
      >
        <span className="logo-sidebar">G</span>
        {showSideBar && (
          <Box>
            <Typography variant="body2">Google</Typography>
            <Typography variant="caption" color="#555">
              2443454454
            </Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
