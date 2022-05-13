import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreens = () => {
  const { state, addBlog } = useContext(Context);

  return (
    <View>
      <Text>Index Screens</Text>
      <Button title="Add Blog" onPress={addBlog} />
      <FlatList
        data={state}
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
