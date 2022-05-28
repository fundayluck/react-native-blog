import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const ShowScreens = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  ShowScreens.navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit", { id: navigation.getParam("id") })
          }
        >
          <AntDesign name="edit" size={30} />
        </TouchableOpacity>
      ),
    };
  };

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreens;
