import React, { createContext, useState, useContext } from "react";

// Create the Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("A");

  // Login function
  const userData = () => {
    setUser(user==="A"?"B":"A");
  };

  // Logout function

  return (
    <UserContext.Provider value={{ user, userData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
