import React, { useEffect, useState } from "react";
import "./NewSlot.css";

export default function NewSlot() {
  const [selectedDays, setSelectedDays] = useState([]);

  useEffect(() => {
    console.log(selectedDays);
  }, [selectedDays]);


  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedDays((prev) => [...prev, value]) 
    } else {
      setSelectedDays((prev) => prev.filter((day) => day !== value)) 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aap yahan selectedDays ko console kar sakte hain ya form ke sath bhej sakte hain
    console.log("Selected Days: ", selectedDays);
  };

  return (
    <div className="newSlot">
      <h1 className="newSlotTitle">New Slot</h1>
      <form className="newSlotForm" onSubmit={handleSubmit}>
        <div className="newSlotItemContainer">
          <div className="newSlotItem">
            <label>Course Name</label>
            <select name="course" className="newSlotSelect">
              <option value="Web Development">Web Development</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>
          <div className="newSlotItem">
            <label>Batch</label>
            <input type="number" placeholder="10" />
          </div>
          <div className="newSlotItem">
            <label>Time</label>
            <input type="text" placeholder="10 to 12 PM" />
          </div>
          <div className="newSlotItem">
            <label>Days</label>
            <div className="newSlotItemDaysContainer">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <div className="newSlotItemDays" key={day}>
                  <span>{day}</span>
                  <input
                    type="checkbox"
                    value={day}
                    onChange={handleCheckboxChange}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="newSlotItem">
            <label>Teacher-Name</label>
            <select name="teacher" className="newSlotSelect">
              <option value="sufiyan">Sufiyan</option>
              <option value="saad">Saad</option>
              <option value="muhammad ali">Muhammad Ali</option>
            </select>
          </div>
          <div className="newSlotItem">
            <label>Teacher ID</label>
            <input type="text" placeholder="16412651" />
          </div>
          <button className="newSlotButton" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
