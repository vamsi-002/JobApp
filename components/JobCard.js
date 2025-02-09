import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function JobCard({ job }) {
  const navigation = useNavigation(); // ✅ Get navigation object

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("JobDetails", { job })} // ✅ Ensure job is valid
    >
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  company: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
});
