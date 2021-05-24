import React, { useContext } from "react";

const MyContext = React.createContext();

//provider
export default function Display() {
  return (
    <div>
      <MyContext.Provider value={5000}>
        <Sample />
      </MyContext.Provider>
    </div>
  );
}

//consumer
function Sample() {
  //using the useCOntextHook, no need for MyContext.Consumer
  //MyContext here inside () is context Object from React.createContext
  const values = useContext(MyContext);

  return (
    <div>
      <h2>My Value is {values}</h2>
    </div>
  );
}
