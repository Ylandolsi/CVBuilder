import React, { createContext, useState } from "react";

export const ProfileSummaryContext = createContext();
export function ProfileSummaryContextProvider({ children }) {
  const [ProfileSummary, setProfileSummary] = useState({
    role: "Software Engineer",
    summary:
      "I am a software engineer with 5 years of experience in developing web applications.",
  });
  const setRole = (role) => {
    setProfileSummary((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      role,
    }));
  };
  const setSummary = (summary) => {
    setProfileSummary(function (prevPersonalDetails) {
      return {
        ...prevPersonalDetails,
        summary,
      };
    });
  };
  const ProfileSummaryContextValues = {
    ProfileSummary,
    setRole,
    setSummary,
  };

  return (
    <ProfileSummaryContext.Provider value={ProfileSummaryContextValues}>
      {children}
    </ProfileSummaryContext.Provider>
  );
}
