import "./NewTeacher.css";

export default function NewTeacher() {
  return (
    <div className="newTeacher">
      <h1 className="newTeacherTitle">New Teacher</h1>
      <form className="newTeacherForm">
        <div className="newTeacherItem">
          <label>Teachername</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newTeacherItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newTeacherItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newTeacherItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newTeacherItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newTeacherItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newTeacherItem">
          <label>Gender</label>
          <div className="newTeacherGender">
            <div className="newTeacherGenderItem">
              <label for="male">Male</label>
              <input type="radio" name="gender" id="male" value="male" />
            </div>

            <div className="newTeacherGenderItem">
              <label for="female">Female</label>
              <input type="radio" name="gender" id="female" value="female" />
            </div>

            <div className="newTeacherGenderItem">
              <label for="other">Other</label>
              <input type="radio" name="gender" id="other" value="other" />
            </div>
          </div>
        </div>
        <button className="newTeacherButton">Create</button>
      </form>
    </div>
  );
}
