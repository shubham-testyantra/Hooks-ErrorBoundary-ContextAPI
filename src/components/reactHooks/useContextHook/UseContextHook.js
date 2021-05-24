//using Context API
import React from "react";

const MyContext = React.createContext();

//propvider

export default function UseContextHook() {
  return (
    <div>
      <MyContext.Provider value={100}>
        <Sample />
      </MyContext.Provider>
    </div>
  );
}

//consumer
function Sample() {
  return (
    <div>
      <MyContext.Consumer>
        {(value) => {
          return <h2>Value passed is {value}</h2>;
        }}
      </MyContext.Consumer>
    </div>
  );
}
