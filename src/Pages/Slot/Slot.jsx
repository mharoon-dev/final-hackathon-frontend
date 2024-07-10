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
  Paper,
  Grid,
} from "@mui/material";
import "./Slot.css";

export default function Slot() {
  return (
    <Container className="slot">
      <Box className="slotTitleContainer" display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" className="slotTitle">Edit Slot</Typography>
        <Button component={Link} to="/newslot" variant="contained" color="primary" className="slotAddButton">
          Create
        </Button>
      </Box>
      <Grid container spacing={3} className="slotContainer">
        <Grid item xs={12} md={4}>
          <Paper className="slotShow" elevation={3}>
            <Box className="slotShowTop">
              <Typography variant="h5" className="slotShowslotname">Batch-10</Typography>
            </Box>
            <Box className="slotShowBottom" mt={2}>
              <Typography variant="subtitle1" className="slotShowTitle">Details</Typography>
              <Box className="slotShowInfo" mt={2}>
                <Typography variant="body1" className="slotShowInfoTitle">ID: 69</Typography>
              </Box>
              <Box className="slotShowInfo" mt={2}>
                <Typography variant="body1" className="slotShowInfoTitle">
                  Days: Monday, Wednesday, Friday
                </Typography>
              </Box>
              <Box className="slotShowInfo" mt={2}>
                <Typography variant="body1" className="slotShowInfoTitle">Time: 10 to 12 PM</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className="slotUpdate" elevation={3}>
            <Typography variant="h5" className="slotUpdateTitle">Edit</Typography>
            <form className="slotUpdateForm">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} className="slotUpdateLeft">
                  <FormControl fullWidth className="slotUpdateItem">
                    <InputLabel>Course Name</InputLabel>
                    <Select name="course" className="slotUpdateSelect">
                      <MenuItem value="Web Development">Web Development</MenuItem>
                      <MenuItem value="UI/UX">UI/UX</MenuItem>
                      <MenuItem value="Graphic Design">Graphic Design</MenuItem>
                      <MenuItem value="CSE">CSE</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Batch Number"
                    type="number"
                    defaultValue="10"
                    fullWidth
                    className="slotUpdateItem"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    label="Time"
                    type="text"
                    defaultValue="10 to 12 pm"
                    fullWidth
                    className="slotUpdateItem"
                    variant="outlined"
                    margin="normal"
                  />
                  <FormControl fullWidth className="slotUpdateItem">
                    <InputLabel>Teacher Name</InputLabel>
                    <Select name="teacher" className="slotUpdateSelect">
                      <MenuItem value="Muhammad Sufiyan">Muhammad Sufiyan</MenuItem>
                      <MenuItem value="Muhammad Ali">Muhammad Ali</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} className="slotUpdateRight">
                  <Button variant="contained" color="primary" fullWidth className="slotUpdateButton">
                    Update
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}




// import { Link } from "react-router-dom";
// import "./Slot.css";

// export default function Slot() {
//   return (
//     <>
//       <div className="slot">
//         <div className="slotTitleContainer">
//           <h1 className="slotTitle">Edit Slot</h1>
//           <Link to="/newslot">
//             <button className="slotAddButton">Create</button>
//           </Link>
//         </div>
//         <div className="slotContainer">
//           <div className="slotShow">
//             <div className="slotShowTop">
//               <div className="slotShowTopTitle">
//                 <h2 className="slotShowslotname">Batch-10</h2>
//               </div>
//             </div>
//             <div className="slotShowBottom">
//               <span className="slotShowTitle">Details</span>
//               <div className="slotShowInfo">
//                 <span className="slotShowInfoTitle">ID: 69</span>
//               </div>
//               <div className="slotShowInfo">
//                 <span className="slotShowInfoTitle">
//                   Days: Monday , Wednesday , Friday
//                 </span>
//               </div>
//               <div className="slotShowInfo">
//                 <span className="slotShowInfoTitle">
//                   Time: 10 to 12 PM
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="slotUpdate">
//             <span className="slotUpdateTitle">Edit</span>
//             <form className="slotUpdateForm">
//               <div className="slotUpdateLeft">
//                 <div className="slotUpdateItem">
//                   <label>Course Name</label>
//                   <select name="course" className="slotUpdateSelect">
//                     <option value="Web Development">Web Development</option>
//                     <option value="UI/UX">UI/UX</option>
//                     <option value="Graphic Design">Graphic Design</option>
//                     <option value="CSE">CSE</option>
//                   </select>
//                 </div>
//                 <div className="slotUpdateItem">
//                   <label>Batch Number</label>
//                   <input
//                     type="number"
//                     placeholder="10"
//                     className="slotUpdateInput"
//                   />
//                 </div>

//                 <div className="slotUpdateItem">
//                   <label>Time</label>
//                   <input
//                     type="text"
//                     placeholder="10 to 12 pm"
//                     className="slotUpdateInput"
//                   />
//                 </div>

//                 <div className="slotUpdateItem">
//                   <label>Teacher Name</label>

//                   <select name="teacher" className="slotUpdateSelect">
//                     <option value="Muhammad Sufiyan">Muhammad Sufiyan</option>
//                     <option value="Muhammad Ali">Muhammad Ali</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="slotUpdateRight">
//                 <button className="slotUpdateButton">Update</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
