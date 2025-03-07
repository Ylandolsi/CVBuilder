import React from "react";

import { PersonalDetailsContext } from "./contexts/PersonalDetailsContext";
import { useContext } from "react";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import ProfileSummary from "./InputData/ProfileSummary";
import { Content } from "@radix-ui/react-accordion";
import Experience from "./InputData/Experience";
import Education from "./InputData/Education";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  same_line: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 3,
  },
  title: {
    margin: 10,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 4,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  Role: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  line_under: {
    display: "inline",
    borderBottom: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    flexGrow: 1,
  },
  center: {
    fontSize: 13,
    textAlign: "center",
  },
  content: {
    fontSize: 12,
    marginLeft: 4,
    marginTop: 4,
  },

  ExperienceHeader: {
    marginTop: 10,
    display: "flex",
    gap: "5",
    flexDirection: "row",
    alignItems: "center",
  },
});

function Cv({ PersonalDetails, ProfileSummary, Experiences, Education }) {
  // format date to string
  const formatDate = (date) => {
    if (date instanceof Date) {
      return date.toLocaleDateString();
    }
    return date;
  };

  return (
    <Document>
      <Page size="a4" style={styles.page}>
        <View style={styles.title}>
          <Text style={styles.line_under}>{PersonalDetails.name}</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.Role}> {ProfileSummary.role} </Text>
        </View>
        <View style={styles.center}>
          <Text>{PersonalDetails.phone}</Text>
        </View>
        <View style={styles.center}>
          <Text>{PersonalDetails.email}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.same_line}>
            <Image
              src={
                "https://img.icons8.com/?size=100&id=Cssf43cjx2fu&format=png&color=000000"
              }
              style={{ width: 20, height: 20, display: "inline-block" }}
            />
            <Text style={styles.line_under}>Profile Summary </Text>
          </View>
          <Text style={{ fontSize: 12, marginLeft: 4, marginTop: 4 }}>
            {" "}
            {ProfileSummary.summary}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.same_line}>
            <Image
              src={
                "https://img.icons8.com/?size=100&id=60643&format=png&color=000000"
              }
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.line_under}>Experience</Text>
          </View>
          {Experiences.map((exp) => (
            <View style={styles.content} key={exp.id}>
              <View style={styles.ExperienceHeader}>
                <Text
                  style={{
                    fontFamily: "Helvetica-Bold",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  {exp.position}
                </Text>
                <Text
                  style={{
                    fontFamily: "Helvetica-Bold",
                    fontSize: 13,
                    fontWeight: 600,
                    fontStyle: "italic",
                    marginLeft: 10,
                  }}
                >
                  {exp.name}
                </Text>
                <View>
                  <Text>
                    ({formatDate(exp.from)} - {formatDate(exp.to)})
                  </Text>
                </View>
              </View>
              <Text style={{ ...styles.content, marginTop: 10 }}>
                {exp.details}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <View style={styles.same_line}>
            <Image
              src={
                "https://img.icons8.com/?size=100&id=38833&format=png&color=000000"
              }
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.line_under}>Education</Text>
          </View>
          {Education.map((ed) => (
            <View style={styles.content} key={ed.id}>
              <View style={styles.ExperienceHeader}>
                <Text
                  style={{
                    fontFamily: "Helvetica-Bold",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  {ed.name} -- {ed.location}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Helvetica-Bold",
                    fontSize: 13,
                    fontWeight: 400,
                    fontStyle: "italic",
                    marginTop: 10,
                  }}
                >
                  {ed.degree} ({formatDate(ed.from)} - {formatDate(ed.to)})
                </Text>
                <View>
                  <Text></Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
// {
//   id: Date.now(),
//   name: "IssatSousse",
//   location: "Sousse",
//   degree: "Computer Science",
//   from: new Date(2022, 0, 20),
//   to: addDays(new Date(2022, 0, 20), 20),
// },

export default Cv;
