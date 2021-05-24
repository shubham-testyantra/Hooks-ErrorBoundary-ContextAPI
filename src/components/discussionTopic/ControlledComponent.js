import React, { useState } from "react";

function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  };

  const handleSubmitButton = (e) => {
    alert(inputValue);
  };
  return (
    <div>
      <h2>Controlled Component</h2>
      <br />
      <input value={inputValue} onChange={handleInputChange} />
      <input type="submit" value="Submit" onClick={handleSubmitButton} />
    </div>
  );
}

export default ControlledComponent;
