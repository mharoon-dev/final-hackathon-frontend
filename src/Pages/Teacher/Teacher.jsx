import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import BadgeIcon from "@mui/icons-material/Badge";
import { Link } from "react-router-dom";
import "./teacher.css";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { CgProfile } from "react-icons/cg";

export default function Teacher() {
  return (
    <>
          <div className="teacher">
        <div className="teacherTitleContainer">
          <Link to="/teachers" style={{ textDecoration: "none", color: "black" }} >
          <Typography variant="h3">Edit Teacher</Typography>
          </Link>
          <CgProfile size={50}/>
          </div>
          <div className="teacherContainer">
          <TextField  label="Teacher Name" id="fullWidth" placeholder="Teacher Name" type="text"/>
          <br /> <br />
          <TextField  label="Email" id="fullWidth" placeholder="Email" type="email"/>
          <br /> <br />
          <TextField  label="Phone" id="fullWidth" placeholder="Phone" type="number"/>
          <br /> <br />
          {/* select dropdown */}
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Select Course"
  >
    <MenuItem value="Web Development">Web Development</MenuItem>
    <MenuItem value="UI/UX">UI/UX</MenuItem>
    <MenuItem value="Graphic Design">Graphic Design</MenuItem>
  </Select>
</FormControl>
<br /> <br />
<TextField type="file"/>
<br /> <br />
<Button variant="contained">Update</Button>
          </div>
        </div>
    </>
  );
}
