import React from "react";
import { useState, createContext } from "react";
import { addDays } from "date-fns";
export const EducationContext = createContext();

export function EducationContextProvider({ children }) {
  const [Education, setEducation] = useState([
    {
      id: Date.now(),
      name: "IssatSousse",
      location: "Sousse",
      degree: "Computer Science",
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    },
  ]);

  const handleDeleteEducation = (id) => {
    return setEducation((prevEducation) => {
      return prevEducation.filter((edu) => edu.id !== id);
    });
  };
  const handleAddEducation = (newEdu) => {
    return setEducation((prevEducation) => {
      return [...prevEducation, newEdu];
    });
  };
  const handleModifyEducation = (newEdu) => {
    setEducation((prevEducation) => {
      return prevEducation.map((edu) => {
        if (edu.id == newEdu.id) {
          return newEdu;
        } else {
          return edu;
        }
      });
    });
  };

  const EducationValues = {
    Education,
    handleAddEducation,
    handleDeleteEducation,
    handleModifyEducation,
  };

  return (
    <EducationContext.Provider value={EducationValues}>
      {children}
    </EducationContext.Provider>
  );
}
