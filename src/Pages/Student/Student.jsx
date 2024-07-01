import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
import "./Student.css";

export default function Student() {
  return (
    <>
      <div className="student">
        <div className="studentTitleContainer">
          <h1 className="studentTitle">Edit student</h1>
          <Link to="/newstudent">
            <button className="studentAddButton">Create</button>
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
                <span className="studentShowstudentname">Anna Becker</span>
                <span className="studentShowstudentTitle">
                  Software Engineer
                </span>
              </div>
            </div>
            <div className="studentShowBottom">
              <span className="studentShowTitle">Account Details</span>
              <div className="studentShowInfo">
                <PermIdentityIcon className="studentShowIcon" />
                <span className="studentShowInfoTitle">annabeck99</span>
              </div>
              <div className="studentShowInfo">
                <CalendarTodayIcon className="studentShowIcon" />
                <span className="studentShowInfoTitle">10.12.1999</span>
              </div>
              <span className="studentShowTitle">Contact Details</span>
              <div className="studentShowInfo">
                <PhoneAndroidIcon className="studentShowIcon" />
                <span className="studentShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="studentShowInfo">
                <MailOutlineIcon className="studentShowIcon" />
                <span className="studentShowInfoTitle">
                  annabeck99@gmail.com
                </span>
              </div>
              <div className="studentShowInfo">
                <LocationSearchingIcon className="studentShowIcon" />
                <span className="studentShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="studentUpdate">
            <span className="studentUpdateTitle">Edit</span>
            <form className="studentUpdateForm">
              <div className="studentUpdateLeft">
                <div className="studentUpdateItem">
                  <label>student name</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="studentUpdateInput"
                  />
                </div>
                <div className="studentUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="studentUpdateInput"
                  />
                </div>
                <div className="studentUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="studentUpdateInput"
                  />
                </div>
                <div className="studentUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="studentUpdateInput"
                  />
                </div>
                <div className="studentUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="studentUpdateInput"
                  />
                </div>
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
                <button className="studentUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
