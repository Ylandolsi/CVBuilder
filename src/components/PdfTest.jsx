import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  doc: {
    width: "500px",
    height: "100%",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document style={styles.doc}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <Navbar />
//     <Divide /> */}

//     <PDFDownloadLink document={<MyDocument />} fileName="mydocument.pdf">
//       {({ loading }) =>
//         loading ? (
//           "Loading document..."
//         ) : (
//           <button className="bg-black">Download PDF</button>
//         )
//       }
//     </PDFDownloadLink>
//     <PDFViewer>
//       <MyDocument />
//     </PDFViewer>
//   </StrictMode>
// );
