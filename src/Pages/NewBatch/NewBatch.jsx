import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./NewBatch.css";

export default function NewBatch() {
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log(date);
  }, [date]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="sm" className="newBatch">
      <Typography variant="h4" className="newBatchTitle" align="center" gutterBottom>
        New Batch
      </Typography>
      <form className="newBatchForm" onSubmit={handleSubmit}>
        <div className="newBatchItemContainer">
          <FormControl fullWidth margin="normal">
            <InputLabel id="course-label">Course Name</InputLabel>
            <Select
              labelId="course-label"
              id="course-select"
              label="Course Name"
              className="newBatchSelect"
            >
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="UI/UX">UI/UX</MenuItem>
              <MenuItem value="Graphic Design">Graphic Design</MenuItem>
              <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Batch Number"
            placeholder="12"
            type="text"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Started From"
            type="date"
            value={date}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Duration"
            placeholder="8 months"
            type="text"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Expiration"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className="newBatchButton"
            sx={{ mt: 3 }}
          >
            Create
          </Button>
        </div>
      </form>
    </Container>
  );
}


// import { useEffect, useState } from "react";
// import "./NewBatch.css";

// export default function NewBatch() {
//   const [date, setDate] = useState("");

//   useEffect(() => {
//     console.log(date);
//   } , [date]);
//   return (
//     <div className="newBatch">
//       <h1 className="newBatchTitle">New Batch</h1>
//       <form className="newBatchForm">
//         <div className="newBatchItemContainer">
//           <div className="newBatchItem">
//             <label>Course Name</label>
//             <select name="course" className="newBatchSelect">
//               <option value="Web Development">Web Development</option>
//               <option value="UI/UX">UI/UX</option>
//               <option value="Graphic Design">Graphic Design</option>
//               <option value="Digital Marketing">Digital Marketing</option>
//             </select>
//           </div>
//           <div className="newBatchItem">
//             <label>Batch Number</label>
//             <input type="text" placeholder="12" />
//           </div>
//           <div className="newBatchItem">
//             <label>Started From</label>
//             <input
//               onChange={(e) => setDate(e.target.value)}
//               type="date"
//               placeholder="jan 2023"
//             />
//           </div>
//           <div className="newBatchItem">
//             <label>Duration</label>
//             <input type="text" placeholder="8 months" />
//           </div>
//           <div className="newBatchItem">
//             <label>Expiration</label>
//             <input type="date" />
//           </div>
//           <button className="newBatchButton">Create</button>
//         </div>
//       </form>
//     </div>
//   );
// }
