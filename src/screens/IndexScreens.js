import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreens = () => {
  const { data, addBlog } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screens</Text>
      <Button title="Add Blog" onPress={addBlog} />
      <FlatList
        data={data}
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
