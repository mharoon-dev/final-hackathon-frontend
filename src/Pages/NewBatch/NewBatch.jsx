import { useEffect, useState } from "react";
import "./NewBatch.css";

export default function NewBatch() {
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log(date);
  } , [date]);
  return (
    <div className="newBatch">
      <h1 className="newBatchTitle">New Batch</h1>
      <form className="newBatchForm">
        <div className="newBatchItemContainer">
          <div className="newBatchItem">
            <label>Course Name</label>
            <select name="course" className="newBatchSelect">
              <option value="Web Development">Web Development</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>
          <div className="newBatchItem">
            <label>Batch Number</label>
            <input type="text" placeholder="12" />
          </div>
          <div className="newBatchItem">
            <label>Started From</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="jan 2023"
            />
          </div>
          <div className="newBatchItem">
            <label>Duration</label>
            <input type="text" placeholder="8 months" />
          </div>
          <div className="newBatchItem">
            <label>Expiration</label>
            <input type="date" />
          </div>
          <button className="newBatchButton">Create</button>
        </div>
      </form>
    </div>
  );
}
