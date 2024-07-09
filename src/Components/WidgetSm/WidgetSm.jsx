import React, { useState } from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

export default function WidgetSm() {
  const teachers = [
    { name: "Anna Keller", title: "Software Engineer", img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "John Doe", title: "Data Scientist", img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "Jane Smith", title: "UX Designer", img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "Tom Brown", title: "Product Manager", img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" }
  ];

  const [open, setOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleDisplay = (teacher) => {
    console.log("Teacher details:", teacher);
    setSelectedTeacher(teacher);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTeacher(null);
  };

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Teacher</span>
      <List className="widgetSmList">
        {teachers.map((teacher, index) => (
          <ListItem key={index} className="widgetSmListItem">
            <ListItemAvatar>
              <Avatar src={teacher.img} className="widgetSmImg" />
            </ListItemAvatar>
            <ListItemText
              primary={teacher.name}
              secondary={teacher.title}
              className="widgetSmUserDetails"
            />
            <Button
              variant="outlined"
              color="primary"
              className="widgetSmButton"
              startIcon={<VisibilityIcon className="widgetSmIcon" />}
              onClick={() => handleDisplay(teacher)}
            >
              Display
            </Button>
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Teacher Details</DialogTitle>
        {selectedTeacher && (
          <DialogContent>
            <DialogContentText>
              <div className="teacherDetails">
                <Avatar src={selectedTeacher.img} className="teacherDetailsImg" />
                <div className="teacherDetailsText">
                  <p><strong>Name:</strong> {selectedTeacher.name}</p>
                  <p><strong>Title:</strong> {selectedTeacher.title}</p>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}




// import "./WidgetSm.css";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// export default function WidgetSm() {
//   return (
//     <div className="widgetSm">
//       <span className="widgetSmTitle">New Teacher</span>
//       <ul className="widgetSmList">
//         <li className="widgetSmListItem">
//           <div className="widgetSmUser">
//             <img
//               src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="widgetSmImg"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 marginLeft: "10px",
//               }}
//             >
//               <span className="widgetSmUsername">Anna Keller</span>
//               <span className="widgetSmUserTitle">Software Engineer</span>
//             </div>
//           </div>
//         </li>
//         <li className="widgetSmListItem">
//           <div className="widgetSmUser">
//             <img
//               src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="widgetSmImg"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 marginLeft: "10px",
//               }}
//             >
//               <span className="widgetSmUsername">Anna Keller</span>
//               <span className="widgetSmUserTitle">Software Engineer</span>
//             </div>
//           </div>
//         </li>
//         <li className="widgetSmListItem">
//           <div className="widgetSmUser">
//             <img
//               src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="widgetSmImg"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 marginLeft: "10px",
//               }}
//             >
//               <span className="widgetSmUsername">Anna Keller</span>
//               <span className="widgetSmUserTitle">Software Engineer</span>
//             </div>
//           </div>
//         </li>
//         <li className="widgetSmListItem">
//           <div className="widgetSmUser">
//             <img
//               src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="widgetSmImg"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 marginLeft: "10px",
//               }}
//             >
//               <span className="widgetSmUsername">Anna Keller</span>
//               <span className="widgetSmUserTitle">Software Engineer</span>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }
