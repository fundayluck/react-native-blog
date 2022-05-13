import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreens = () => {
  const blogs = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screens</Text>
      <FlatList
        data={blogs}
        keyExtractor={(blogs) => blogs.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreens;
