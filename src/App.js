import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleFieldChange = () => {
    setIsSubmitted(false);
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                handleFieldChange();
              }}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                handleFieldChange();
              }}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {isSubmitted && (
        <div>
          <p>Full Name: {`${firstName} ${lastName}`}</p>
        </div>
      )}
    </div>
  );
}

export default App;