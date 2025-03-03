import Cv from "./Pdf";
import UserInputs from "./UserInputs";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import React from "react";
import { useContext } from "react";

import { PersonalDetailsContext } from "./contexts/PersonalDetailsContext";
import { ProfileSummaryContext } from "./contexts/ProfileSummaryContext";
import { ExperienceContext } from "./contexts/ExperiencesContext";
import { EducationContext } from "./contexts/EducationContext";

function DownloadButton() {
  const { PersonalDetails } = useContext(PersonalDetailsContext);
  const { ProfileSummary } = useContext(ProfileSummaryContext);
  const { Experiences } = useContext(ExperienceContext);
  const { Education } = useContext(EducationContext);

  return (
    <PDFDownloadLink
      document={
        <Cv
          PersonalDetails={PersonalDetails}
          ProfileSummary={ProfileSummary}
          Experiences={Experiences}
          Education={Education}
        />
      }
      fileName="myCV.pdf"
    >
      {({ loading }) =>
        loading ? (
          "Loading cv..."
        ) : (
          <button className="bg-gray-400 p-4 rounded-2xl hover:bg-black hover:cursor-pointer">
            Download CV
          </button>
        )
      }
    </PDFDownloadLink>
  );
}

function DivideAfterContext() {
  const { PersonalDetails } = useContext(PersonalDetailsContext);
  const { ProfileSummary } = useContext(ProfileSummaryContext);
  const { Experiences } = useContext(ExperienceContext);
  const { Education } = useContext(EducationContext);

  return (
    <div className="flex  lg:flex-row flex-col min-h-screen w-full ">
      <div className="m-5 flex-grow lg:w-3/6 overflow-auto ">
        <UserInputs />
      </div>
      <div className="flex-3 lg:w-3/6 flex-shrink-0">
        <div key={Experiences.length} className="h-full  ">
          <div
            key={Education.length}
            className="m-5 flex flex-col justify-start items-center  h-full  "
          >
            <PDFViewer
              style={{
                width: "min(100%, 550px)",
                height: "min(100vh, 780px)",
                border: "none",
              }}
              showToolbar={false}
            >
              <Cv
                PersonalDetails={PersonalDetails}
                ProfileSummary={ProfileSummary}
                Experiences={Experiences}
                Education={Education}
              />
            </PDFViewer>
            <div className="mt-4">
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DivideAfterContext;
