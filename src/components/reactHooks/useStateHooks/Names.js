import React, { useState } from "react";

function Names() {
  const [name, setName] = useState("Tony");
  const [year, setYear] = useState(2020);

  return (
    <div>
      <h2 className="text-primary">Name: {name}</h2>
      <button onClick={() => setName("Axel")}>Change Name</button>

      <h4 className="text-danger mt-5">Year: {year}</h4>
      <button className="btn" onClick={() => setYear(year + 1)}>
        Lets go Forward In Time!!
      </button>
      <button className="btn" onClick={() => setYear(year - 1)}>
        Lets go Backward In Time!!
      </button>
    </div>
  );
}

export default Names;
