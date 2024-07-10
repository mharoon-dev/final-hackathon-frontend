import React from "react";
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
import "./NewStudent.css";

export default function NewStudent() {
  return (
    <Container maxWidth="sm" className="NewStudent">
      <Typography variant="h4" className="NewStudentTitle" align="center" gutterBottom>
        New Student
      </Typography>
      <form className="NewStudentForm">
        <div className="NewStudentItemDiv">
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            placeholder="Muhammad Haroon"
          />
          <TextField
            fullWidth
            margin="normal"
            type="email"
            label="Email"
            placeholder="123@gmail.com"
          />
          <TextField
            fullWidth
            margin="normal"
            type="email"
            label="Father's Email"
            placeholder="father@gmail.com"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            placeholder="+1 123 456 78"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="course-label">Course Name</InputLabel>
            <Select labelId="course-label" label="Course Name">
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="UI/UX">UI/UX</MenuItem>
              <MenuItem value="Graphic Design">Graphic Design</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            type="number"
            label="Batch"
            placeholder="10"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Slot ID"
            placeholder="56115203"
          />
        </div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          className="NewStudentButton"
          sx={{ mt: 3 }}
        >
          Create
        </Button>
      </form>
    </Container>
  );
}


// import "./NewStudent.css";

// export default function NewStudent() {
//   return (
//     <div className="NewStudent">
//       <h1 className="NewStudentTitle">New Student</h1>
//       <form className="NewStudentForm">
//         <div>
//           <div className="newStudentItem">
//             <label>FullName</label>
//             <input type="text" placeholder="Muhammad Haroon" />
//           </div>
//           <div className="newStudentItem">
//             <label>Email</label>
//             <input type="email" placeholder="123@gmail.com" />
//           </div>
//           <div className="newStudentItem">
//             <label>Father Email</label>
//             <input type="email" placeholder="father@gmail.com" />
//           </div>
//           <div className="newStudentItem">
//             <label>phone Number</label>
//             <input type="text" placeholder="+1 123 456 78" />
//           </div>
//           <div className="newStudentItem">
//             <label>Course Name</label>
//             <select name="course" className="newStudentSelect">
//               <option value="Web Development">Web Development</option>
//               <option value="UI/UX">UI/UX</option>
//               <option value="Graphic Design">Graphic Design</option>
//             </select>
//           </div>
//           <div className="newStudentItem">
//             <label>Batch</label>
//             <input type="number" placeholder="10" />
//           </div>
//           <div className="newStudentItem">
//             <label>SlotId</label>
//             <input type="text" placeholder="56115203" />
//           </div>
//         </div>

//         <button className="NewStudentButton">Create</button>
//       </form>
//     </div>
//   );
// }
