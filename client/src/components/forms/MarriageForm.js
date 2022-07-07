import { TreeForm } from "../styled/TreeForm.styled";
import DatePicker from "react-date-picker";
import { useState, forwardRef } from "react";
import { ImUser, ImUsers } from "react-icons/im";
import { GiLinkedRings } from "react-icons/gi";

const MarriageForm = forwardRef(({ type = "Marriage", level }, ref) => {
  const [formValues, setFormValues] = useState({
    place: "",
    date: "",
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
          <GiLinkedRings />
          Add {type}
        </h1>

        <h2>Marriage Details</h2>
        <label>
          Place of Marriage
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
        <input type="submit" value={`Add ${type}`} />
      </TreeForm>
    </>
  );
});

export default MarriageForm;
