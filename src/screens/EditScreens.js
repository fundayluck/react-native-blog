import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const EditScreens = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View>
      <Text>Edit Screen - {navigation.getParam("id")}</Text>
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
      <Button
        onPress={() => {
          addBlog(title, content, () => {
            navigation.navigate("Index");
          });
        }}
        title="Add blog"
      />
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
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 5,
  },
});

export default EditScreens;
