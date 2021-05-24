import React, { useState, useEffect } from "react";

function Checked() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
    console.log(checked);
  });

  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "Box Checked" : "Box Unchecked"}
    </div>
  );
}

export default Checked;
