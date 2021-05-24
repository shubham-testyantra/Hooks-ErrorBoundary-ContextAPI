import React, { useState, useEffect } from "react";

function UseEffectArray() {
  const [values, setValue] = useState("");
  const [values2, setValue2] = useState("");

  //UseEffect with dependancy Array
  useEffect(() => {
    console.log(`First Name :${values}`);
  }, [values]);

  useEffect(() => {
    console.log(`Second Name: ${values2}`);
  }, [values2]);

  return (
    <div>
      <input
        type="text"
        placeholder="First Value"
        value={values}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Second Value"
        value={values2}
        onChange={(e) => setValue2(e.target.value)}
      />
    </div>
  );
}

export default UseEffectArray;
