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
import "./Batch.css";

export default function Batch() {
  return (
    <Container className="batch">
      <Box className="batchTitleContainer" display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" className="batchTitle">Edit Batch</Typography>
        <Button component={Link} to="/newbatch" variant="contained" color="primary" className="batchAddButton">
          Create
        </Button>
      </Box>
      <Grid container spacing={3} className="batchContainer">
        <Grid item xs={12} md={4}>
          <Paper className="batchShow" elevation={3}>
            <Box className="batchShowTop">
              <Typography variant="h5" className="batchShowbatchname">Details</Typography>
            </Box>
            <Box className="batchShowBottom" mt={2}>
              <Box className="batchShowInfo" mt={2}>
                <Typography variant="body1" className="batchShowInfoTitle">Course: Web Development</Typography>
              </Box>
              <Box className="batchShowInfo" mt={2}>
                <Typography variant="body1" className="batchShowInfoTitle">Batch Number: 10</Typography>
              </Box>
              <Box className="batchShowInfo" mt={2}>
                <Typography variant="body1" className="batchShowInfoTitle">Total Slots: 10</Typography>
              </Box>
              <Box className="batchShowInfo" mt={2}>
                <Typography variant="body1" className="batchShowInfoTitle">Started From: July 2023</Typography>
              </Box>
              <Box className="batchShowInfo" mt={2}>
                <Typography variant="body1" className="batchShowInfoTitle">Duration: 10 Months</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className="batchUpdate" elevation={3}>
            <Typography variant="h5" className="batchUpdateTitle">Edit</Typography>
            <form className="batchUpdateForm">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} className="batchUpdateLeft">
                  <FormControl fullWidth className="batchUpdateItem">
                    <InputLabel>Course Name</InputLabel>
                    <Select name="course" className="batchUpdateSelect">
                      <MenuItem value="Web Development">Web Development</MenuItem>
                      <MenuItem value="UI/UX">UI/UX</MenuItem>
                      <MenuItem value="Graphic Design">Graphic Design</MenuItem>
                      <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Batch Number"
                    type="text"
                    defaultValue="10"
                    fullWidth
                    className="batchUpdateItem"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    label="Started From"
                    type="text"
                    defaultValue="July 2023"
                    fullWidth
                    className="batchUpdateItem"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    label="Duration"
                    type="text"
                    defaultValue="10 months"
                    fullWidth
                    className="batchUpdateItem"
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="batchUpdateRight">
                  <Button variant="contained" color="primary" fullWidth className="batchUpdateButton">
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
// import "./Batch.css";
// import { useState } from "react";

// export default function Batch() {
//   return (
//     <>
//       <div className="batch">
//         <div className="batchTitleContainer">
//           <h1 className="batchTitle">Edit Batch</h1>
//           <Link to="/newbatch">
//             <button className="batchAddButton">Create</button>
//           </Link>
//         </div>
//         <div className="batchContainer">
//           <div className="batchShow">
//             <div className="batchShowTop">
//               <div className="batchShowTopTitle">
//                 <h2 className="batchShowbatchname">Details</h2>
//               </div>
//             </div>
//             <div className="batchShowBottom">
//               <div className="batchShowInfo">
//                 <span className="batchShowInfoTitle">
//                   Course: Web Development
//                 </span>
//               </div>
//               <div className="batchShowInfo">
//                 <span className="batchShowInfoTitle">Batch Number: 10</span>
//               </div>
//               <div className="batchShowInfo">
//                 <span className="batchShowInfoTitle">Total Slots: 10</span>
//               </div>
//               <div className="batchShowInfo">
//                 <span className="batchShowInfoTitle">
//                   Started From: july 2023
//                 </span>
//               </div>
//               <div className="batchShowInfo">
//                 <span className="batchShowInfoTitle">Duration: 10 Months</span>
//               </div>
//             </div>
//           </div>
//           <div className="batchUpdate">
//             <span className="batchUpdateTitle">Edit</span>
//             <form className="batchUpdateForm">
//               <div className="batchUpdateLeft">
//                 <div className="batchUpdateItem">
//                   <label>Course Name</label>
//                   <select name="course" className="batchUpdateSelect">
//                     <option value="Web Development">Web Development</option>
//                     <option value="UI/UX">UI/UX</option>
//                     <option value="Graphic Design">Graphic Design</option>
//                     <option value="Digital Marketing">Digital Marketing</option>
//                   </select>
//                 </div>
//                 <div className="batchUpdateItem">
//                   <label>Batch Number</label>
//                   <input
//                     type="text"
//                     placeholder="10"
//                     className="batchUpdateInput"
//                   />
//                 </div>
//                 <div className="batchUpdateItem">
//                   <label>Started From</label>
//                   <input
//                     type="text"
//                     placeholder="feb 2023"
//                     className="batchUpdateInput"
//                   />
//                 </div>
//                 <div className="batchUpdateItem">
//                   <label>Duration</label>
//                   <input
//                     type="text"
//                     placeholder="10 months"
//                     className="batchUpdateInput"
//                   />
//                 </div>
//               </div>
//               <div className="batchUpdateRight">
//                 <button className="batchUpdateButton">Update</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
