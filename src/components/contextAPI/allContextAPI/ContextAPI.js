import React from "react";

// step1
const MyContext = React.createContext();

//Step 2: Create a provider
// 1)way Provider Part1
// class Provider extends React.Component {
//   state = {
//     name: "Snow Mountain",
//   };

//   render() {
//     return (
//       <>
//         <MyContext.Provider value={{ state: this.state }}>
//           {/* //element wich is passed within component */}
//           {this.props.children}
//         </MyContext.Provider>
//       </>
//     );
//   }
// }

//Child 2:Consumer
const Trial = () => {
  return (
    <MyContext.Consumer>
      {(context) => {
        return <h2>The values passed was : {context.state.name}</h2>;
      }}
    </MyContext.Consumer>
  );
};

//Child 1
const Lift = () => {
  return <Trial />;
};

//parent
class ResortNew extends React.Component {
  state = {
    name: "JM Mountains",
  };

  render() {
    return (
      <div>
        {/* //1)way Provider part2 */}
        {/* <Provider>
          <Lift />
        </Provider> */}

        {/* //2ndway Provider part1 as final part */}
        <MyContext.Provider value={{ state: this.state }}>
          <Lift />
        </MyContext.Provider>
      </div>
    );
  }
}

export default ResortNew;
