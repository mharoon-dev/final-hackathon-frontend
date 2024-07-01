import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ReportIcon from "@mui/icons-material/Report";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
const Sidebar = ({ open, toggleDrawer }) => {
  const dashboard = [
    {
      name: "Home",
      iconName: <LineStyleIcon className="sidebarIcon" />,
    },
  ];

  const quickMenu = [
    {
      name: "Teacher",
      iconName: <PermIdentityOutlinedIcon className="sidebarIcon" />,
    },
    {
      name: "Students",
      iconName: <StorefrontOutlinedIcon className="sidebarIcon" />,
    },
  ];

  const notifications = [
    {
      name: "Mail",
      iconName: <MailOutlineOutlinedIcon className="sidebarIcon" />,
    },
  ];

  const staff = [
    {
      name: "Manage",
      iconName: <WorkOutlineOutlinedIcon className="sidebarIcon" />,
    },
    {
      name: "Analytics",
      iconName: <TimelineOutlinedIcon className="sidebarIcon" />,
    },
    {
      name: "Report",
      iconName: <ReportIcon className="sidebarIcon" />,
    },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {dashboard.map((obj) => (
          <ListItem key={obj.name} disablePadding>
            <ListItemButton>
              {obj.iconName}
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {quickMenu.map((obj) => (
          <ListItem key={obj.name} disablePadding>
            <ListItemButton>
              {obj.iconName}
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {notifications.map((obj) => (
          <ListItem key={obj.name} disablePadding>
            <ListItemButton>
              {obj.iconName}
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {staff.map((obj) => (
          <ListItem key={obj.name} disablePadding>
            <ListItemButton>
              {obj.iconName}
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>

      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
                <li className="sidebarListItem active">
                  <LineStyleIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link
                to="/teachers"
                style={{ textDecoration: "none", color: "gray" }}
              >
                <li className="sidebarListItem">
                  <PermIdentityOutlinedIcon className="sidebarIcon" />
                  Teacher
                </li>
              </Link>
              <Link
                to="/students"
                style={{ textDecoration: "none", color: "gray" }}
              >
                <li className="sidebarListItem">
                  <StorefrontOutlinedIcon className="sidebarIcon" />
                  Students
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutlineOutlinedIcon className="sidebarIcon" />
                Mail
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutlineOutlinedIcon className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <TimelineOutlinedIcon className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
