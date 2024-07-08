import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import BadgeIcon from "@mui/icons-material/Badge";
import { Link } from "react-router-dom";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import "./Student.css";

export default function Student() {
  return (
    <>
      <div className="student">
        <div className="studentTitleContainer">
          <Typography variant="h4" className="studentTitle">Edit Student</Typography>
          <Link to="/newstudent">
            <Button variant="contained" color="primary" className="studentAddButton">Create</Button>
          </Link>
        </div>
        <div className="studentContainer">
          <div className="studentShow">
            <div className="studentShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="studentShowImg"
              />
              <div className="studentShowTopTitle">
                <Typography variant="h6" className="studentShowstudentname">Anna Becker</Typography>
                <Typography variant="body2" className="studentShowstudentTitle">Batch-10</Typography>
              </div>
            </div>
            <div className="studentShowBottom">
              <Typography variant="subtitle1" className="studentShowTitle">Details</Typography>
              <div className="studentShowInfo">
                <PhoneAndroidIcon className="studentShowIcon" />
                <Typography variant="body2" className="studentShowInfoTitle">+1 123 456 67</Typography>
              </div>
              <div className="studentShowInfo">
                <MailOutlineIcon className="studentShowIcon" />
                <Typography variant="body2" className="studentShowInfoTitle">annabeck99@gmail.com</Typography>
              </div>
              <div className="studentShowInfo">
                <BadgeIcon className="studentShowIcon" />
                <Typography variant="body2" className="studentShowInfoTitle">ID : 456613</Typography>
              </div>
            </div>
          </div>
          <div className="studentUpdate">
            <Typography variant="h5" className="studentUpdateTitle">Edit</Typography>
            <form className="studentUpdateForm">
              <div className="studentUpdateLeft">
                <FormControl fullWidth margin="normal">
                  <TextField label="FullName" variant="outlined" placeholder="Anna Becker" className="studentUpdateInput" />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <TextField label="Email" variant="outlined" placeholder="annabeck99@gmail.com" className="studentUpdateInput" />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <TextField label="Father Email" variant="outlined" placeholder="father@gmail.com" className="studentUpdateInput" />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <TextField label="Phone" variant="outlined" placeholder="+1 123 456 67" className="studentUpdateInput" />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Course Name</InputLabel>
                  <Select className="studentUpdateSelect" label="Course Name">
                    <MenuItem value="Web Development">Web Development</MenuItem>
                    <MenuItem value="UI/UX">UI/UX</MenuItem>
                    <MenuItem value="Graphic Design">Graphic Design</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <TextField label="Batch" variant="outlined" placeholder="10" type="number" className="studentUpdateInput" />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Slot</InputLabel>
                  <Select className="studentUpdateSelect" label="Slot">
                    <MenuItem value="monday,wednesday,friday (6 to 9 pm)">Monday, Wednesday, Friday (6 to 9 pm)</MenuItem>
                    <MenuItem value="tuesday,thursday,saturday (6 to 9 pm)">Tuesday, Thursday, Saturday (6 to 9 pm)</MenuItem>
                    <MenuItem value="sunday (6 to 9 pm)">Sunday (6 to 9 pm)</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="studentUpdateRight">
                <div className="studentUpdateUpload">
                  <img
                    className="studentUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <PublishIcon className="studentUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <Button variant="contained" color="primary" className="studentUpdateButton">Update</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
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
