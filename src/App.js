import React, { createContext } from "react";
import "./App.css";
import FetchUser from "./components/axios/fetchAPI/FetchUser";

import PersonInput from "./components/axios/PersonInput";
import PersonInputDelete from "./components/axios/PersonInputDelete";
import PersonList from "./components/axios/PersonList";
import ImageFetch from "./components/axios/useFetchHookCH/ImageFetch";
import ResortNew from "./components/contextAPI/allContextAPI/ContextAPI";
import ResortState from "./components/contextAPI/allContextAPI/ContextAPIState";
import Resort from "./components/contextAPI/allContextAPI/PropsDrilling";
import ComponentC from "./components/contextAPI/contextComponents/ComponentC";
import { UserProvider } from "./components/contextAPI/contextComponents/useContext";
import ControlledComponent from "./components/discussionTopic/ControlledComponent";
import UncontrolledComponent from "./components/discussionTopic/UncontrolledComponent";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Hero from "./components/errorBoundary/Hero";
import CompA from "./components/examplesContext/CompA";
import RandomUsers from "./components/HOC/Hoc";
import ParentComponent from "./components/pureComponents/ParentComponent";
import PureComponents from "./components/pureComponents/PureComponents";
import RegularComponent from "./components/pureComponents/RegularComponent";
import Display from "./components/reactHooks/useContextHook/Display";
import UseContextHook from "./components/reactHooks/useContextHook/UseContextHook";
import Checked from "./components/reactHooks/useEffectHooks/Checked";
import GitHubUser from "./components/reactHooks/useEffectHooks/GitHubUser";
import Likes from "./components/reactHooks/useEffectHooks/Likes";
import UseEffectArray from "./components/reactHooks/useEffectHooks/UseEffectArray";
import Reducer from "./components/reactHooks/useReducerHook/Reducer";
import Names from "./components/reactHooks/useStateHooks/Names";
import UseStateArray from "./components/reactHooks/useStateHooks/UseStateArray";
import UseStateObject from "./components/reactHooks/useStateHooks/UseStateObject";
import MyReference from "./components/refs/MyReference";

// Using for example 1
// const FirstName = createContext();

// Using for example 2
const SecondExample = createContext();

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <Hero heroName="Spiderman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary> */}

      {/* <RegularComponent name="Axel" />
      <PureComponents name="Axel" />  */}

      {/* <ParentComponent /> */}

      {/* //Discussion Topic */}
      {/* <ControlledComponent /> */}
      {/* <UncontrolledComponent /> */}

      {/* <UserProvider value="Dragon Ball Z">
        <ComponentC />
      </UserProvider> */}

      {/* //whenever provider is not providing default value */}
      {/* <ComponentC /> */}

      {/* //----propsDrilling */}
      {/* <Resort /> */}
      {/* <ResortNew />

      {/* //Examples of context:1 */}
      {/* <FirstName.Provider value={"Axel Blaze"}>
        <CompA />
      </FirstName.Provider> */}

      {/* //Examples of context:2 */}
      {/* <SecondExample.Provider>
        <Child1 />
      </SecondExample.Provider> */}

      {/* <ResortState /> */}

      {/* ================================================= */}
      {/* //React Hooks
      //1) useState */}

      {/* <Names /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateArray /> */}

      {/* //2) useEffect  */}
      {/* <Likes /> */}
      {/* <Checked /> */}
      {/* <UseEffectArray /> */}

      {/* //3)useReducer */}
      {/* <Reducer /> */}

      {/* //4)useContext */}
      {/* <UseContextHook /> */}
      {/* <Display /> */}

      {/* //Api Calls */}
      {/* <GitHubUser login="wycats" /> */}

      {/* //HOC  */}
      {/* <RandomUsers /> */}

      {/* //Axios */}
      {/* <PersonList /> */}
      {/* <PersonInput /> */}
      {/* <PersonInputDelete /> */}

      {/* //Fetch Api */}
      {/* <FetchUser /> */}

      {/* <ImageFetch /> */}

      <MyReference />
    </div>
  );
}

export default App;
// export { FirstName };
