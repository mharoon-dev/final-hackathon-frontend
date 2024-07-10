import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Container,
  Box,
  Avatar,
} from "@mui/material";
import { CgProfile } from "react-icons/cg";
import "./teacher.css";

export default function Teacher() {
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/100");

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePic(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="md" className="teacher">
      <Box className="teacherTitleContainer">
        <Link to="/teachers" style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="h3">Edit Teacher</Typography>
        </Link>
        <Avatar src={profilePic} alt="Profile" className="teacherAvatar" />
      </Box>
      <Box component="form" sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Teacher Name"
          placeholder="Teacher Name"
          type="text"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          placeholder="Email"
          type="email"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone"
          placeholder="Phone"
          type="number"
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="course-label">Select Course</InputLabel>
          <Select labelId="course-label" label="Select Course">
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="UI/UX">UI/UX</MenuItem>
            <MenuItem value="Graphic Design">Graphic Design</MenuItem>
          </Select>
        </FormControl>
        <Box className="teacherUploadContainer">
          <Button
            variant="contained"
            component="label"
            sx={{ mt: 2, mb: 2 }}
          >
            Upload Profile Picture
            <input
              type="file"
              hidden
              onChange={handleProfilePicChange}
            />
          </Button>
        </Box>
        <Button variant="contained" color="primary" fullWidth>
          Update
        </Button>
      </Box>
    </Container>
  );
}



// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import PublishIcon from "@mui/icons-material/Publish";
// import BadgeIcon from "@mui/icons-material/Badge";
// import { Link } from "react-router-dom";
// import "./teacher.css";
// import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
// import { CgProfile } from "react-icons/cg";

// export default function Teacher() {
//   return (
//     <>
//           <div className="teacher">
//         <div className="teacherTitleContainer">
//           <Link to="/teachers" style={{ textDecoration: "none", color: "black" }} >
//           <Typography variant="h3">Edit Teacher</Typography>
//           </Link>
//           <CgProfile size={50}/>
//           </div>
//           <div className="teacherContainer">
//           <TextField  label="Teacher Name" id="fullWidth" placeholder="Teacher Name" type="text"/>
//           <br /> <br />
//           <TextField  label="Email" id="fullWidth" placeholder="Email" type="email"/>
//           <br /> <br />
//           <TextField  label="Phone" id="fullWidth" placeholder="Phone" type="number"/>
//           <br /> <br />
//           {/* select dropdown */}
//           <FormControl fullWidth>
//   <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
//   <Select
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     label="Select Course"
//   >
//     <MenuItem value="Web Development">Web Development</MenuItem>
//     <MenuItem value="UI/UX">UI/UX</MenuItem>
//     <MenuItem value="Graphic Design">Graphic Design</MenuItem>
//   </Select>
// </FormControl>
// <br /> <br />
// <TextField type="file"/>
// <br /> <br />
// <Button variant="contained">Update</Button>
//           </div>
//         </div>
//     </>
//   );
// }
