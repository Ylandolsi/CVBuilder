import React from "react";
import { PersonalDetailContextProvider } from "./contexts/PersonalDetailsContext";
import { ProfileSummaryContextProvider } from "./contexts/ProfileSummaryContext";
import DivideAfterContext from "./Divide2";

export default function Test() {
  return (
    <PersonalDetailContextProvider>
      <ProfileSummaryContextProvider>
        <DivideAfterContext />
      </ProfileSummaryContextProvider>
    </PersonalDetailContextProvider>
  );
}
// When deciding between inline styles (`style` prop) and Tailwind classes:

// - Use **Tailwind classes** (like `m-4`, `w-1/3`) for most styling needs, especially:
//   - Layout, spacing, sizing, colors, typography, responsive design
//   - Common patterns that are repeated across your app
//   - When you want to maintain a consistent design system

// - Use **inline styles** (`style` prop) when:
//   - Working with dynamic values that change based on state/props
//   - Setting exact values that Tailwind doesn't provide
//   - Integrating with third-party components that require style objects (like the PDFViewer in your example)
//   - Need to set CSS properties that Tailwind doesn't support

// In your code, you're correctly using Tailwind for layout and the inline style for the PDFViewer which needs specific dimensions.
