import "./NewStudent.css";

export default function NewStudent() {
  return (
    <div className="NewStudent">
      <h1 className="NewStudentTitle">New Student</h1>
      <form className="NewStudentForm">
        <div className="NewStudentItem">
          <label>studentname</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="NewStudentItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="NewStudentItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="NewStudentItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="NewStudentItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="NewStudentItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="NewStudentItem">
          <label>Gender</label>
          <div className="NewStudentGender">
            <div className="NewStudentGenderItem">
              <label for="male">Male</label>
              <input type="radio" name="gender" id="male" value="male" />
            </div>

            <div className="NewStudentGenderItem">
              <label for="female">Female</label>
              <input type="radio" name="gender" id="female" value="female" />
            </div>

            <div className="NewStudentGenderItem">
              <label for="other">Other</label>
              <input type="radio" name="gender" id="other" value="other" />
            </div>
          </div>
        </div>
        <button className="NewStudentButton">Create</button>
      </form>
    </div>
  );
}
