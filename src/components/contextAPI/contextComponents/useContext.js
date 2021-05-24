import React from "react";

//step 1: Create a context
const UserContext = React.createContext("Naruto");

//step 2: Provider and Consumer
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
