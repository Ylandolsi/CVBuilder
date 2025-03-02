import React, { createContext, useState } from "react";

export const PersonalDetailsContext = createContext();
export function PersonalDetailContextProvider({ children }) {
  const [PersonalDetails, setPersonalDetails] = useState({
    name: "Jack Martinez",
    email: "JackMartinez@gmail.com",
    phone: "99999912",
  });
  const setName = (name) => {
    setPersonalDetails((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      name,
    }));
  };
  const setEmail = (email) => {
    setPersonalDetails((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      email,
    }));
  };

  const setPhone = (phone) => {
    setPersonalDetails(function (prevPersonalDetails) {
      return {
        ...prevPersonalDetails,
        phone,
      };
    });
  };
  const PersonalDetailsContextValues = {
    PersonalDetails,
    setName,
    setEmail,
    setPhone,
  };

  return (
    <PersonalDetailsContext.Provider value={PersonalDetailsContextValues}>
      {children}
    </PersonalDetailsContext.Provider>
  );
}
