import Cv from "./Pdf";
import UserInputs from "./UserInputs";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
export default function Test() {
  return (
    <div className="flex h-screen">
      <div className="m-5 flex-3 overflow-auto">
        <UserInputs />
      </div>
      <div className="m-5 flex-2 flex gap-4 flex-col justify-start items-center">
        <PDFViewer
          style={{
            width: "595px",
            height: "842px",
          }}
          showToolbar={false}
        >
          <Cv />
        </PDFViewer>
        <PDFDownloadLink document={<Cv />} fileName="myCV.pdf">
          {({ loading }) =>
            loading ? (
              "Loading cv..."
            ) : (
              <button className="bg-gray-400 p-4 rounded-2xl">
                Download CV
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
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
