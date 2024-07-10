import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import "./NewSlot.css";

export default function NewSlot() {
  const [selectedDays, setSelectedDays] = useState([]);

  useEffect(() => {
    console.log(selectedDays);
  }, [selectedDays]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedDays((prev) => [...prev, value]);
    } else {
      setSelectedDays((prev) => prev.filter((day) => day !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can log the selected days or send them with a form
    console.log("Selected Days: ", selectedDays);
  };

  return (
    <Container maxWidth="sm" className="newSlot">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        New Slot
      </Typography>
      <form className="newSlotForm" onSubmit={handleSubmit}>
        <Box className="newSlotItemContainer">
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
            type="text"
            label="Time"
            placeholder="10 to 12 PM"
          />
          <FormControl component="fieldset" margin="normal" fullWidth>
            <Typography component="legend">Days</Typography>
            <FormGroup row>
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <FormControlLabel
                  key={day}
                  control={
                    <Checkbox value={day} onChange={handleCheckboxChange} />
                  }
                  label={day}
                />
              ))}
            </FormGroup>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="teacher-label">Teacher Name</InputLabel>
            <Select labelId="teacher-label" label="Teacher Name">
              <MenuItem value="sufiyan">Sufiyan</MenuItem>
              <MenuItem value="saad">Saad</MenuItem>
              <MenuItem value="muhammad ali">Muhammad Ali</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            type="text"
            label="Teacher ID"
            placeholder="16412651"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className="newSlotButton"
            sx={{ mt: 3 }}
          >
            Create
          </Button>
        </Box>
      </form>
    </Container>
  );
}


// import React, { useEffect, useState } from "react";
// import "./NewSlot.css";

// export default function NewSlot() {
//   const [selectedDays, setSelectedDays] = useState([]);

//   useEffect(() => {
//     console.log(selectedDays);
//   }, [selectedDays]);


//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;

//     if (checked) {
//       setSelectedDays((prev) => [...prev, value]) 
//     } else {
//       setSelectedDays((prev) => prev.filter((day) => day !== value)) 
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aap yahan selectedDays ko console kar sakte hain ya form ke sath bhej sakte hain
//     console.log("Selected Days: ", selectedDays);
//   };

//   return (
//     <div className="newSlot">
//       <h1 className="newSlotTitle">New Slot</h1>
//       <form className="newSlotForm" onSubmit={handleSubmit}>
//         <div className="newSlotItemContainer">
//           <div className="newSlotItem">
//             <label>Course Name</label>
//             <select name="course" className="newSlotSelect">
//               <option value="Web Development">Web Development</option>
//               <option value="UI/UX">UI/UX</option>
//               <option value="Graphic Design">Graphic Design</option>
//             </select>
//           </div>
//           <div className="newSlotItem">
//             <label>Batch</label>
//             <input type="number" placeholder="10" />
//           </div>
//           <div className="newSlotItem">
//             <label>Time</label>
//             <input type="text" placeholder="10 to 12 PM" />
//           </div>
//           <div className="newSlotItem">
//             <label>Days</label>
//             <div className="newSlotItemDaysContainer">
//               {[
//                 "Monday",
//                 "Tuesday",
//                 "Wednesday",
//                 "Thursday",
//                 "Friday",
//                 "Saturday",
//                 "Sunday",
//               ].map((day) => (
//                 <div className="newSlotItemDays" key={day}>
//                   <span>{day}</span>
//                   <input
//                     type="checkbox"
//                     value={day}
//                     onChange={handleCheckboxChange}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="newSlotItem">
//             <label>Teacher-Name</label>
//             <select name="teacher" className="newSlotSelect">
//               <option value="sufiyan">Sufiyan</option>
//               <option value="saad">Saad</option>
//               <option value="muhammad ali">Muhammad Ali</option>
//             </select>
//           </div>
//           <div className="newSlotItem">
//             <label>Teacher ID</label>
//             <input type="text" placeholder="16412651" />
//           </div>
//           <button className="newSlotButton" type="submit">
//             Create
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
