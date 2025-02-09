import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import JobCard from "../components/JobCard";
import ShimmerLoader from "../components/ShimmerLoader";
import { MaterialIcons } from "@expo/vector-icons";

export default function JobsScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://testapi.getlokalapp.com/common/jobs?page=${page}`
      );
      const data = await response.json();
      if (data.results) {
        setJobs((prevJobs) => [...prevJobs, ...data.results]); // ✅ Use functional update
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, [page]); // ✅ Runs when page changes

  return (
    <View style={styles.container}>
      {loading && jobs.length === 0 ? ( 
        <FlatList
          data={[1, 2, 3, 4]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <ShimmerLoader />}
        />
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
          renderItem={({ item }) => (
            <JobCard job={item} navigation={navigation} /> 
          )}
          onEndReached={() => setPage((prev) => prev + 1)}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading && <ActivityIndicator size="large" />}
        />

      )}

      {/* Floating Refresh Button */}
      <TouchableOpacity style={styles.fab} onPress={() => setPage(1)}>
        <MaterialIcons name="refresh" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
});
