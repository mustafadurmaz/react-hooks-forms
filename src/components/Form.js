import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const [number, setNumber] = useState(0);
  const [error, setError] = useState(null);

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setError(null);
    } else {
      setError(`${newNumber} is not a valid number!`);
    }
  }

  return (
    <div>
      <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <form>
      <input type="number" value={number} onChange={handleNumberChange} />
      {error ? <span style={{ color: "red" }}>{error}</span> : null}
    </form>
    </div>
    
  );
}

export default Form;
