import React, { useReducer } from "react";

function Reducer() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div>
      <input type="checkbox" value={checked} onChange={toggle}></input>
      {checked ? "box Checked" : "box unchecked"}
    </div>
  );
}

export default Reducer;
