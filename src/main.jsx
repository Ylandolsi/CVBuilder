import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Divide from "./components/Divide";
import React from "react";
import Footer from "./components/footer";

document.getElementById("root").style.height = "100vh";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Divide />
    <Footer />
  </StrictMode>
);
