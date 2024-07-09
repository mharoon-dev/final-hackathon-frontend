import React from "react";
import "./Topbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Avatar } from "@mui/material";

const Topbar = ({ open, toggleDrawer }) => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngYVde_xLBtdLq1yABQw6XZSOc4ungYvPGw&s"
                alt=""
              />
            </span>
          </Link>
        </div>
        <div className="topRight">
          {!user ? (
            <div className="topbarIconContainer">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="success">
                  SignUp
                </Button>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="info">
                  LogIn
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <Button variant="contained" color="error" onClick={() => { /* Handle logout */ }}>
                Logout
              </Button>
              <Avatar
                alt="User Avatar"
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="topAvatar"
              />
            </>
          )}
          <MenuIcon className="menuIcon" onClick={toggleDrawer(true)} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;



// import React from "react";
// import "./Topbar.css";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Button } from "@mui/material";

// const Topbar = ({ open, toggleDrawer }) => {
//   const user = useSelector((state) => state.user.currentUser); 

//   return (
//     <div className="topbar">
//       <div className="topbarWrapper">
//         <div className="topLeft">
//           <Link to="/" style={{ textDecoration: "none" }}>
//             <span className="logo">
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngYVde_xLBtdLq1yABQw6XZSOc4ungYvPGw&s" alt="" />
//             </span>
//           </Link>
//         </div>
//         <div className="topRight">
//           {!user && (
//             <div className="topbarIconContainer">
//               <Link to="/signup"  style={{ textDecoration: "none" }}>
//               <Button variant="contained" color="success">SignUp</Button>
//               </Link>
//               <Link to="/login" style={{ textDecoration: "none" }}>
//               <Button variant="contained" color="info">LogIn</Button>
//               </Link>
//               <Link to="/login" style={{ textDecoration: "none" }}>
//               <Button variant="contained" color="error">Logout</Button>
//               </Link>
//             </div>
//           )}
//           <MenuIcon className="menuIcon" onClick={toggleDrawer(true)} />

//           {user && (
//             <img
//               src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="topAvatar"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;
