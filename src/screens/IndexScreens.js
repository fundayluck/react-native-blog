import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const IndexScreens = () => {
  const { state, addBlog } = useContext(Context);

  return (
    <View>
      <Button title="Add Blog" onPress={addBlog} />
      <FlatList
        data={state}
        keyExtractor={(blogs) => blogs.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => console.log(item.id)}>
                <AntDesign style={styles.icons} name="delete" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icons: {
    fontSize: 24,
  },
});

export default IndexScreens;
