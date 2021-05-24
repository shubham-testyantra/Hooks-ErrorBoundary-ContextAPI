import React, { useState } from "react";

function UseStateObject() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        value={name.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        value={name.lastName}
      />

      <h2 className="text-success">First Name : {name.firstName}</h2>
      <h2 className="text-success">Last Name : {name.lastName}</h2>

      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
}

export default UseStateObject;
