import React from "react";
import "./widgetLg.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button, Typography } from "@mui/material";

export default function WidgetLg() {
  const ButtonWithStatus = ({ type }) => {
    let color;
    switch (type) {
      case "Approved":
        color = "success";
        break;
      case "Declined":
        color = "error";
        break;
      case "Pending":
        color = "info";
        break;
      default:
        color = "default";
    }
    return (
      <Button variant="outlined" color={color}>
        {type}
      </Button>
    );
  };

  const rows = [
    {
      name: "Susan Carol",
      img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      present: 25,
      total: 30,
      status: "Approved",
    },
    {
      name: "John Doe",
      img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      present: 20,
      total: 25,
      status: "Pending",
    },
    {
      name: "Jane Smith",
      img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      present: 18,
      total: 20,
      status: "Declined",
    },
    {
      name: "Tom Brown",
      img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      present: 30,
      total: 30,
      status: "Approved",
    },
  ];

  return (
    <div className="widgetLg">
      <Typography variant="h6" className="widgetLgTitle">
        Top Student Performances
      </Typography>
      <TableContainer component={Paper}>
        <Table className="widgetLgTable">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Present</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="widgetLgUser">
                  <Avatar src={row.img} alt="" className="widgetLgImg" />
                  <Typography className="widgetLgName">{row.name}</Typography>
                </TableCell>
                <TableCell className="widgetLgDate">{row.present}</TableCell>
                <TableCell className="widgetLgAmount">{row.total}</TableCell>
                <TableCell className="widgetLgStatus">
                  <ButtonWithStatus type={row.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}



// import "./widgetLg.css";

// export default function WidgetLg() {
//   const Button = ({ type }) => {
//     return <button className={"widgetLgButton " + type}>{type}</button>;
//   };
//   return (
//     <div className="widgetLg">
//       <h3 className="widgetLgTitle">Top Student Performances</h3>
//       <table className="widgetLgTable">
//         <tr className="widgetLgTr">
//           <th className="widgetLgTh">Name</th>
//           <th className="widgetLgTh">Present</th>
//           <th className="widgetLgTh">Total</th>
//           <th className="widgetLgTh">Status</th>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">25</td>
//           <td className="widgetLgAmount">30</td>
//           <td className="widgetLgStatus">
//             <Button type="Approved" />
//           </td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">25</td>
//           <td className="widgetLgAmount">30</td>
//           <td className="widgetLgStatus">
//             <Button type="Approved" />
//           </td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">25</td>
//           <td className="widgetLgAmount">30</td>
//           <td className="widgetLgStatus">
//             <Button type="Approved" />
//           </td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">25</td>
//           <td className="widgetLgAmount">30</td>
//           <td className="widgetLgStatus">
//             <Button type="Approved" />
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }
