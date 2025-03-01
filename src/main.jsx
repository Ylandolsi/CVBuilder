import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Test from "./components/Divide";
import Navbar from "./components/Navbar";
import Divide from "./components/Divide";
import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./components/PdfTest";
document.getElementById("root").style.height = "100vh";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Divide />
  </StrictMode>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <PDFDownloadLink document={<MyDocument />} fileName="mydocument.pdf">
//       {({ loading }) =>
//         loading ? (
//           "Loading document..."
//         ) : (
//           <button className="bg-black">Download PDF</button>
//         )
//       }
//     </PDFDownloadLink>
//     <PDFViewer
//       style={{
//         width: "100%",
//         height: "100%",
//         border: "none",
//       }}
//       showToolbar={false}
//     >
//       <MyDocument />
//     </PDFViewer>
//   </StrictMode>
// );
