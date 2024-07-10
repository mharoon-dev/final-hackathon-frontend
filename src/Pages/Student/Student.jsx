import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import BadgeIcon from "@mui/icons-material/Badge";
import "./Student.css";

export default function Student() {
  return (
    <Container className="student">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Edit Student</Typography>
        <Button component={Link} to="/newstudent" variant="contained" color="primary">
          Create
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Box display="flex" alignItems="center">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
              />
              <Box ml={2}>
                <Typography variant="h6">Anna Becker</Typography>
                <Typography variant="body2">Batch-10</Typography>
              </Box>
            </Box>
            <Box mt={2}>
              <Typography variant="subtitle1" gutterBottom>Details</Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <PhoneAndroidIcon />
                <Typography variant="body2" ml={1}>+1 123 456 67</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <MailOutlineIcon />
                <Typography variant="body2" ml={1}>annabeck99@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <BadgeIcon />
                <Typography variant="body2" ml={1}>ID: 456613</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>Edit</Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="FullName"
                    variant="outlined"
                    placeholder="Anna Becker"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    placeholder="annabeck99@gmail.com"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Father Email"
                    variant="outlined"
                    placeholder="father@gmail.com"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Phone"
                    variant="outlined"
                    placeholder="+1 123 456 67"
                    fullWidth
                    margin="normal"
                  />
                  <FormControl fullWidth margin="normal" variant="outlined">
                    <InputLabel>Course Name</InputLabel>
                    <Select label="Course Name">
                      <MenuItem value="Web Development">Web Development</MenuItem>
                      <MenuItem value="UI/UX">UI/UX</MenuItem>
                      <MenuItem value="Graphic Design">Graphic Design</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Batch"
                    variant="outlined"
                    placeholder="10"
                    type="number"
                    fullWidth
                    margin="normal"
                  />
                  <FormControl fullWidth margin="normal" variant="outlined">
                    <InputLabel>Slot</InputLabel>
                    <Select label="Slot">
                      <MenuItem value="monday,wednesday,friday (6 to 9 pm)">
                        Monday, Wednesday, Friday (6 to 9 pm)
                      </MenuItem>
                      <MenuItem value="tuesday,thursday,saturday (6 to 9 pm)">
                        Tuesday, Thursday, Saturday (6 to 9 pm)
                      </MenuItem>
                      <MenuItem value="sunday (6 to 9 pm)">Sunday (6 to 9 pm)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <img
                      src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                      style={{ width: 100, height: 100, borderRadius: "10px", objectFit: "cover", marginBottom: 20 }}
                    />
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="file-upload"
                      type="file"
                    />
                    <label htmlFor="file-upload">
                      <IconButton component="span">
                        <PublishIcon />
                      </IconButton>
                    </label>
                  </Box>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>Update</Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}





// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import PublishIcon from "@mui/icons-material/Publish";
// import BadgeIcon from "@mui/icons-material/Badge";
// import { Link } from "react-router-dom";
// import "./Student.css";

// export default function Student() {
//   return (
//     <>
//       <div className="student">
//         <div className="studentTitleContainer">
//           <h1 className="studentTitle">Edit student</h1>
//           <Link to="/newstudent">
//             <button className="studentAddButton">Create</button>
//           </Link>
//         </div>
//         <div className="studentContainer">
//           <div className="studentShow">
//             <div className="studentShowTop">
//               <img
//                 src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                 alt=""
//                 className="studentShowImg"
//               />
//               <div className="studentShowTopTitle">
//                 <span className="studentShowstudentname">Anna Becker</span>
//                 <span className="studentShowstudentTitle">Batch-10</span>
//               </div>
//             </div>
//             <div className="studentShowBottom">
//               <span className="studentShowTitle">Details</span>
//               <div className="studentShowInfo">
//                 <PhoneAndroidIcon className="studentShowIcon" />
//                 <span className="studentShowInfoTitle">+1 123 456 67</span>
//               </div>
//               <div className="studentShowInfo">
//                 <MailOutlineIcon className="studentShowIcon" />
//                 <span className="studentShowInfoTitle">
//                   annabeck99@gmail.com
//                 </span>
//               </div>
//               <div className="teacherShowInfo">
//                 <BadgeIcon className="teacherShowIcon" />
//                 <span className="teacherShowInfoTitle">ID : 456613</span>
//               </div>
//             </div>
//           </div>
//           <div className="studentUpdate">
//             <span className="studentUpdateTitle">Edit</span>
//             <form className="studentUpdateForm">
//               <div className="studentUpdateLeft">
//                 <div className="studentUpdateItem">
//                   <label>FullName</label>
//                   <input
//                     type="text"
//                     placeholder="annabeck99"
//                     className="studentUpdateInput"
//                   />
//                 </div>
//                 <div className="studentUpdateItem">
//                   <label>Email</label>
//                   <input
//                     type="text"
//                     placeholder="annabeck99@gmail.com"
//                     className="studentUpdateInput"
//                   />
//                 </div>
//                 <div className="studentUpdateItem">
//                   <label>Father Email</label>
//                   <input
//                     type="text"
//                     placeholder="annabeck99@gmail.com"
//                     className="studentUpdateInput"
//                   />
//                 </div>
//                 <div className="studentUpdateItem">
//                   <label>Phone</label>
//                   <input
//                     type="text"
//                     placeholder="+1 123 456 67"
//                     className="studentUpdateInput"
//                   />
//                 </div>
//                 <div className="studentUpdateItem">
//                   <label>Course Name</label>
//                   <select name="course" className="studentUpdateSelect">
//                     <option value="Web Development">Web Development</option>
//                     <option value="UI/UX">UI/UX</option>
//                     <option value="Graphic Design">Graphic Design</option>
//                   </select>
//                 </div>
//                 <div className="studentUpdateItem">
//                   <label>Batch</label>
//                   <input
//                     type="number"
//                     placeholder="10"
//                     className="studentUpdateInput"
//                   />
//                 </div>
//                 <div className="studentUpdateItem">
//                   <label>Slot</label>
//                   <select name="slot" className="studentUpdateSelect">
//                     <option value="monday,wednesday,friday (6 to 9 pm)">
//                       monday,wednesday,friday (6 to 9 pm)
//                     </option>
//                     <option value="tuesday,thursday,saturday (6 to 9 pm)">
//                       tuesday,thursday,saturday (6 to 9 pm)
//                     </option>
//                     <option value="sunday (6 to 9 pm)">
//                       sunday (6 to 9 pm)
//                     </option>
//                   </select>
//                 </div>
//               </div>
//               <div className="studentUpdateRight">
//                 <div className="studentUpdateUpload">
//                   <img
//                     className="studentUpdateImg"
//                     src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                     alt=""
//                   />
//                   <label htmlFor="file">
//                     <PublishIcon className="studentUpdateIcon" />
//                   </label>
//                   <input type="file" id="file" style={{ display: "none" }} />
//                 </div>
//                 <button className="studentUpdateButton">Update</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
