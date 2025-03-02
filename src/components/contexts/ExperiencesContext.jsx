import React from "react";
import { useState, createContext } from "react";
import Experience from "../InputData/Experience";
import { addDays } from "date-fns";
export const ExperienceContext = createContext();

export function ExperienceContextProvider({ children }) {
  const [Experiences, setExperiences] = useState([
    {
      id: Date.now(),
      name: "Technova Soltuion",
      position: "Software Engineer",
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
      details:
        "As a Software Engineer at TechNova Solutions, the individual will be responsible for designing, developing, and maintaining web applications that cater to a variety of industries, from finance to healthcare. They will work collaboratively with cross-functional teams to understand user needs and translate them into high-quality software solutions.",
    },
  ]);

  function handleDeleteExperienec(id) {
    return setExperiences(function (prevExperiences) {
      return prevExperiences.filter((exp) => exp.id !== id);
    });
  }
  function handleAddExperience(newExp) {
    return setExperiences(function (prevExperiences) {
      return [...prevExperiences, newExp];
    });
  }
  function handleModifyExperience(newExp) {
    setExperiences(function (prevExperiences) {
      return prevExperiences.map((exp) => {
        if (exp.id == newExp.id) {
          return newExp;
        } else {
          return exp;
        }
      });
    });
  }

  const ExperiencesValues = {
    Experiences,
    handleAddExperience,
    handleDeleteExperienec,
    handleModifyExperience,
  };
  return (
    <ExperienceContext.Provider value={ExperiencesValues}>
      {children}
    </ExperienceContext.Provider>
  );
}
