import React from "react";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ReportIcon from "@mui/icons-material/Report";
import MenuIcon from "@mui/icons-material/Menu";
import "./Sidebar.css"; // Import your existing CSS for sidebar styling

const Sidebar = ({ open, toggleDrawer }) => {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const currentPath = location.pathname;

  const dashboard = [
    { name: "Home", link: "/", icon: <LineStyleIcon className="sidebarIcon" /> },
  ];

  const quickMenu = [
    { name: "Teacher", link: "/teachers", icon: <PermIdentityOutlinedIcon className="sidebarIcon" /> },
    { name: "Students", link: "/students", icon: <SchoolOutlinedIcon className="sidebarIcon" /> },
    { name: "Slots", link: "/slots", icon: <EventNoteOutlinedIcon className="sidebarIcon" /> },
    { name: "Batches", link: "/batches", icon: <LayersOutlinedIcon className="sidebarIcon" /> },
  ];

  const authItems = [
    { name: "signup", link: "/signup", icon: <PermIdentityOutlinedIcon className="sidebarIcon" /> },
    { name: "login", link: "/login", icon: <PermIdentityOutlinedIcon className="sidebarIcon" /> },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 280,
        bgcolor: "background.default",
        height: '100%',
        padding: '20px 0'
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {dashboard.map((obj) => (
          <Link to={obj.link} className="sidebarLink" key={obj.name}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {quickMenu.map((obj) => (
          <Link to={obj.link} className="sidebarLink" key={obj.name}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {!user && authItems.map((obj) => (
          <Link to={obj.link} className="sidebarLink" key={obj.name}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} className="menuButton">
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: "background.default",
            boxSizing: 'border-box',
          },
        }}
      >
        {DrawerList}
      </Drawer>

      <Box
        className="sidebar"
        sx={{
          width: 280,
          bgcolor: "background.default",
          height: '100vh',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          display: { xs: 'none', md: 'block' },
          boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        }}
      >
        <Box className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              {dashboard.map((obj) => (
                <Link to={obj.link} className="sidebarLink" key={obj.name}>
                  <li className={`sidebarListItem ${currentPath === obj.link ? "active" : ""}`}>
                    {obj.icon}
                    <span>{obj.name}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              {quickMenu.map((obj) => (
                <Link to={obj.link} className="sidebarLink" key={obj.name}>
                  <li className={`sidebarListItem ${currentPath === obj.link ? "active" : ""}`}>
                    {obj.icon}
                    <span>{obj.name}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutlineOutlinedIcon className="sidebarIcon" />
                <span>Mail</span>
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutlineOutlinedIcon className="sidebarIcon" />
                <span>Manage</span>
              </li>
              <li className="sidebarListItem">
                <TimelineOutlinedIcon className="sidebarIcon" />
                <span>Analytics</span>
              </li>
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                <span>Reports</span>
              </li>
            </ul>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;



// import "./Sidebar.css";
// import LineStyleIcon from "@mui/icons-material/LineStyle";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
// import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
// import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
// import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
// import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import ReportIcon from "@mui/icons-material/Report";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
// import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Sidebar = ({ open, toggleDrawer }) => {
//   const user = useSelector((state) => state.user.currentUser); // Spelling corrected

//   const location = useLocation();
//   const currentPath = location.pathname;

//   const dashboard = [
//     {
//       name: "Home",
//       link: "/",
//       iconName: <LineStyleIcon className="sidebarIcon" />,
//     },
//   ];

//   const quickMenu = [
//     {
//       name: "Teacher",
//       link: "/teachers",
//       iconName: <PermIdentityOutlinedIcon className="sidebarIcon" />,
//     },
//     {
//       name: "Students",
//       link: "/students",
//       iconName: <SchoolOutlinedIcon className="sidebarIcon" />,
//     },
//     {
//       name: "Slots",
//       link: "/slots",
//       iconName: <EventNoteOutlinedIcon className="sidebarIcon" />,
//     },
//     {
//       name: "Batches",
//       link: "/batches",
//       iconName: <LayersOutlinedIcon className="sidebarIcon" />,
//     },
//   ];

//   const authItems = [
//     {
//       name: "signup",
//       link: "/signup",
//       iconName: <PermIdentityOutlinedIcon className="sidebarIcon" />,
//     },
//     {
//       name: "login",
//       link: "/login",
//       iconName: <PermIdentityOutlinedIcon className="sidebarIcon" />,
//     },
//   ];

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {dashboard.map((obj) => (
//           <Link
//             to={obj.link}
//             style={{ textDecoration: "none", color: "#1e1e1e" }}
//           >
//             <ListItem key={obj.name} disablePadding>
//               <ListItemButton>
//                 {obj.iconName}
//                 <ListItemText primary={obj.name} />
//               </ListItemButton>
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {quickMenu.map((obj) => (
//           <Link
//             to={obj.link}
//             style={{ textDecoration: "none", color: "#1e1e1e" }}
//           >
//             <ListItem key={obj.name} disablePadding>
//               <ListItemButton>
//                 {obj.iconName}
//                 <ListItemText primary={obj.name} />
//               </ListItemButton>
//             </ListItem>
//           </Link>
//         ))}
//       </List>

//       <Divider />
//       <List>
//         {!user &&
//           authItems.map((obj) => (
//             <Link
//               to={obj.link}
//               style={{ textDecoration: "none", color: "#1e1e1e" }}
//             >
//               <ListItem key={obj.name} disablePadding>
//                 <ListItemButton>
//                   {obj.iconName}
//                   <ListItemText primary={obj.name} />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//           ))}
//       </List>
//     </Box>
//   );
//   return (
//     <>
//       <div>
//         <Drawer open={open} onClose={toggleDrawer(false)}>
//           {DrawerList}
//         </Drawer>
//       </div>

//       <div className="sidebar">
//         <div className="sidebarWrapper">
//           <div className="sidebarMenu">
//             <h3 className="sidebarTitle">Dashboard</h3>
//             <ul className="sidebarList">
//               <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
//                 <li
//                   className={`sidebarListItem ${
//                     currentPath === "/" ? "active" : ""
//                   }`}
//                 >
//                   <LineStyleIcon className="sidebarIcon" />
//                   Home
//                 </li>
//               </Link>
//             </ul>
//           </div>

//           <div className="sidebarMenu">
//             <h3 className="sidebarTitle">Quick Menu</h3>
//             <ul className="sidebarList">
//               <Link
//                 to="/teachers"
//                 style={{ textDecoration: "none", color: "gray" }}
//               >
//                 <li
//                   className={`sidebarListItem ${
//                     currentPath === "/teachers" ? "active" : ""
//                   }`}
//                 >
//                   <PermIdentityOutlinedIcon className="sidebarIcon" />
//                   Teacher
//                 </li>
//               </Link>
//               <Link
//                 to="/students"
//                 style={{ textDecoration: "none", color: "gray" }}
//               >
//                 <li
//                   className={`sidebarListItem ${
//                     currentPath === "/students" ? "active" : ""
//                   }`}
//                 >
//                   <SchoolOutlinedIcon className="sidebarIcon" />
//                   Students
//                 </li>
//               </Link>
//               <Link
//                 to="/slots"
//                 style={{ textDecoration: "none", color: "gray" }}
//               >
//                 <li
//                   className={`sidebarListItem ${
//                     currentPath === "/slots" ? "active" : ""
//                   }`}
//                 >
//                   <EventNoteOutlinedIcon className="sidebarIcon" />
//                   Slots
//                 </li>
//               </Link>
//               <Link
//                 to="/batches"
//                 style={{ textDecoration: "none", color: "gray" }}
//               >
//                 <li
//                   className={`sidebarListItem ${
//                     currentPath === "/batches" ? "active" : ""
//                   }`}
//                 >
//                   <LayersOutlinedIcon className="sidebarIcon" />
//                   Batches
//                 </li>
//               </Link>
//             </ul>
//           </div>

//           <div className="sidebarMenu">
//             <h3 className="sidebarTitle">Notifications</h3>
//             <ul className="sidebarList">
//               <li className="sidebarListItem">
//                 <MailOutlineOutlinedIcon className="sidebarIcon" />
//                 Mail
//               </li>
//             </ul>
//           </div>

//           <div className="sidebarMenu">
//             <h3 className="sidebarTitle">Staff</h3>
//             <ul className="sidebarList">
//               <li className="sidebarListItem">
//                 <WorkOutlineOutlinedIcon className="sidebarIcon" />
//                 Manage
//               </li>
//               <li className="sidebarListItem">
//                 <TimelineOutlinedIcon className="sidebarIcon" />
//                 Analytics
//               </li>
//               <li className="sidebarListItem">
//                 <ReportIcon className="sidebarIcon" />
//                 Reports
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
