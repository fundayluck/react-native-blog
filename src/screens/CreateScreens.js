import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreens = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Add blog" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 5,
  },
});

export default CreateScreens;
