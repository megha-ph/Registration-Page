import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const inputField = { firstName: "", lastName: "", email: "", telePhone: "", age: "", prof: "" };
  const professionEntry = [
    { value: "0", label: "select" },
    { value: "1", label: "Student" },
    { value: "2", label: "Private Profession" },
    { value: "3", label: "Governament Profession" },
  ];
  const [formValue, setFormValue] = useState(inputField);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();
var isvalid=false;
  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(event.target);
    setFormValue({ ...formValue, [id]: value });
    console.log(formValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var something=inputValidation(formValue)
    setFormError(something);
    if (isvalid) {
      navigate("/Success");
    }
    console.log("You clicked submit.");
  };

  const inputValidation = (value) => {
    const errors = {};
    const fnameRegex = /^[A-Za-z]+$/;
    const lnameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!value.firstName) {
      errors.firstName = "Enter First name";
      isvalid=false;
    } else if (!fnameRegex.test(value.firstName)) {
      errors.firstName = "Firstname should contain only letters";
      isvalid=false;
    }
    else{
      isvalid=true;
    }


    if (!value.lastName) {
      errors.lastName = " Enter Last name ";
      isvalid=false;
    } else if (!lnameRegex.test(value.lastName)) {
      errors.lastName = "Lastname should contain only letters";
      isvalid=false;
    }
    else{
      isvalid=true;
    }

    if (!value.email) {
      errors.email = " Enter Email ";
      isvalid=false;
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Please enter valid email";
      isvalid=false;
    }else{
      isvalid=true;
    }

    if (!value.telePhone) {
      errors.telePhone = "Enter Telephone number ";
      isvalid=false;
    } else if (!phoneRegex.test(value.telePhone)) {
      errors.telePhone = "Please enter valid Telephone number";
      isvalid=false;
    }else{
      isvalid=true;
    }

    if (!value.age) {
      errors.age = " Enter age ";
      isvalid=false;
    } else if (value.age < 18) {
      errors.age = "you are under age";
      setFormValue(false);
    }else{
      isvalid=true;
    }

    if (!value.prof) {
      errors.prof = "Select profession ";
      isvalid=false;
    }else{
      isvalid=true;
    }
    
    return errors;
  };

  return (
    <div className="container">
      <h4 className="reg">Registration form</h4>

      <form onSubmit={handleSubmit}>
        <div className="ipfield">
          <label>First Name </label>
          <input name="fname" value={formValue.firstName} id="firstName" onChange={handleChange} type="text" placeholder="firstname" />
        </div>
        <p>{formError.firstName}</p>

        <div className="ipfield">
          <label>Last Name </label>
          <input name="lname" value={formValue.lastName} id="lastName" onChange={handleChange} type="text" placeholder="lastname" />
        </div>
        <p>{formError.lastName}</p>

        <div className="ipfield">
          <label>Email</label>
          <input name="email" value={formValue.email} id="email" onChange={handleChange} type="text" placeholder="email" />
        </div>
        <p>{formError.email}</p>

        <div className="ipfield">
          <label>TelePhone Number</label>
          <input name="telePhone" value={formValue.telePhone} id="telePhone" onChange={handleChange} type="tele" placeholder="telePhone" />
        </div>
        <p>{formError.telePhone}</p>

        <div className="ipfield">
          <label>Age</label>
          <input name="age" value={formValue.age} id="age" onChange={handleChange} type="text" placeholder="age" />
        </div>
        <p>{formError.age}</p>

        <div className="dropdown">
          <label> Profession</label>
          <div>
            <select id="prof" onChange={handleChange} value={formValue.prof}>
              {professionEntry.map((option) => (
                <option key={option.value} value={option.value}>
                  {" "}
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p>{formError.prof}</p>

        <div className="button">
          <div>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </div>

        <div className="success"></div>
      </form>
    </div>
  );
}
