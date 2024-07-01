import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
import "./teacher.css";

export default function Teacher() {
  return (
    <>
      <div className="teacher">
        <div className="teacherTitleContainer">
          <h1 className="teacherTitle">Edit teacher</h1>
          <Link to="/newteacher">
            <button className="teacherAddButton">Create</button>
          </Link>
        </div>
        <div className="teacherContainer">
          <div className="teacherShow">
            <div className="teacherShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="teacherShowImg"
              />
              <div className="teacherShowTopTitle">
                <span className="teacherShowteachername">Anna Becker</span>
                <span className="teacherShowteacherTitle">
                  Software Engineer
                </span>
              </div>
            </div>
            <div className="teacherShowBottom">
              <span className="teacherShowTitle">Account Details</span>
              <div className="teacherShowInfo">
                <PermIdentityIcon className="teacherShowIcon" />
                <span className="teacherShowInfoTitle">annabeck99</span>
              </div>
              <div className="teacherShowInfo">
                <CalendarTodayIcon className="teacherShowIcon" />
                <span className="teacherShowInfoTitle">10.12.1999</span>
              </div>
              <span className="teacherShowTitle">Contact Details</span>
              <div className="teacherShowInfo">
                <PhoneAndroidIcon className="teacherShowIcon" />
                <span className="teacherShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="teacherShowInfo">
                <MailOutlineIcon className="teacherShowIcon" />
                <span className="teacherShowInfoTitle">
                  annabeck99@gmail.com
                </span>
              </div>
              <div className="teacherShowInfo">
                <LocationSearchingIcon className="teacherShowIcon" />
                <span className="teacherShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="teacherUpdate">
            <span className="teacherUpdateTitle">Edit</span>
            <form className="teacherUpdateForm">
              <div className="teacherUpdateLeft">
                <div className="teacherUpdateItem">
                  <label>teacher name</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="teacherUpdateInput"
                  />
                </div>
                <div className="teacherUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="teacherUpdateInput"
                  />
                </div>
                <div className="teacherUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="teacherUpdateInput"
                  />
                </div>
                <div className="teacherUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="teacherUpdateInput"
                  />
                </div>
                <div className="teacherUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="teacherUpdateInput"
                  />
                </div>
              </div>
              <div className="teacherUpdateRight">
                <div className="teacherUpdateUpload">
                  <img
                    className="teacherUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <PublishIcon className="teacherUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="teacherUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
