import "./NewTeacher.css";

export default function NewTeacher() {
  return (
    <div className="newTeacher">
      <h1 className="newTeacherTitle">New Teacher</h1>
      <form className="newTeacherForm">
        <div className="newTeacherItemContainer">
          <div className="newTeacherItem">
            <label>Teachername</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newTeacherItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newTeacherItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 78" />
          </div>
          <button className="newTeacherButton">Create</button>
        </div>
      </form>
    </div>
  );
}
