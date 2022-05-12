import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreens = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screens</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreens;
