import React, { useState } from "react";

function UseStateArray() {
  const [items, setItems] = useState([]);

  const addItems = () => {
    console.log("Items", items);
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItems}>Add</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseStateArray;
