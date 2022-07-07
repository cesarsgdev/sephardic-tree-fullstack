import { TreeForm } from "../styled/TreeForm.styled";
import DatePicker from "react-date-picker";
import { useState, forwardRef } from "react";
import { ImUser, ImUsers } from "react-icons/im";

const PersonForm = forwardRef(({ type, level }, ref) => {
  const [dateEvent, setDateEvent] = useState("");
  const [dateDeath, setDateDeath] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    event: "n",
    place: "",
    date: "",
    placeDeath: "",
    dateDeath: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setFormValues({ ...formValues, date: e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formValues));
  };

  return (
    <>
      <TreeForm id={type} ref={ref} onSubmit={handleSubmit}>
        <h1>
          {type === "Principal" ? <ImUser /> : <ImUsers />}
          Add {type}
        </h1>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Event Type
          <select name="event" value={formValues.event} onChange={handleChange}>
            <option value="n">Birth</option>
            <option value="b">Baptism</option>
          </select>
        </label>
        <h2>Event Details</h2>
        <label>
          Place of Event
          <input
            type="text"
            name="place"
            value={formValues.place}
            onChange={handleChange}
          />
        </label>
        <label>
          Date
          <DatePicker
            name="date"
            format="d-M-y"
            onChange={handleDateChange}
            value={formValues.date}
            maxDate={new Date()}
          />
        </label>
        <h2>Death Details</h2>
        <div className="checkBoxOptions">
          <label className="checkBoxes">
            <input type="checkbox" />
            Person still alive
          </label>
          <label className="checkBoxes">
            <input type="checkbox" />
            Death details unknwon
          </label>
        </div>
        <label>
          Place of Death
          <input
            type="text"
            name="placeDeath"
            value={formValues.placeDeath}
            onChange={handleChange}
          />
        </label>
        <label>
          Date
          <DatePicker
            format="d-M-y"
            onChange={setDateDeath}
            value={dateDeath}
          />
        </label>
        <input type="submit" value={`Add ${type}`} />
      </TreeForm>
    </>
  );
});

export default PersonForm;
