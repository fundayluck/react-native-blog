import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreens = () => {
  const BlogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screens</Text>
      <FlatList
        data={BlogPosts}
        keyExtractor={(BlogPost) => BlogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreens;
