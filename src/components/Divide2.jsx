import Cv from "./Pdf";
import UserInputs from "./UserInputs";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import React from "react";
import { useContext } from "react";

import { PersonalDetailsContext } from "./contexts/PersonalDetailsContext";
import { ProfileSummaryContext } from "./contexts/ProfileSummaryContext";

function DownloadButton() {
  const { PersonalDetails } = useContext(PersonalDetailsContext);
  const { ProfileSummary } = useContext(ProfileSummaryContext);
  return (
    <PDFDownloadLink
      document={
        <Cv PersonalDetails={PersonalDetails} ProfileSummary={ProfileSummary} />
      }
      fileName="myCV.pdf"
    >
      {({ loading }) =>
        loading ? (
          "Loading cv..."
        ) : (
          <button className="bg-gray-400 p-4 rounded-2xl">Download CV</button>
        )
      }
    </PDFDownloadLink>
  );
}

function DivideAfterContext() {
  const { PersonalDetails } = useContext(PersonalDetailsContext);
  const { ProfileSummary } = useContext(ProfileSummaryContext);

  return (
    <div className="flex h-screen">
      <div className="m-5 flex-3 overflow-auto">
        <UserInputs />
      </div>
      <div className="m-5 flex-2 flex gap-4 flex-col justify-start items-center">
        <PDFViewer
          style={{
            width: "550px",
            height: "780px",
            border: "none",
          }}
          showToolbar={false}
        >
          <Cv
            PersonalDetails={PersonalDetails}
            ProfileSummary={ProfileSummary}
          />
        </PDFViewer>
        <DownloadButton />
      </div>
    </div>
  );
}

export default DivideAfterContext;
