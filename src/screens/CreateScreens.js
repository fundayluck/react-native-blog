import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreens = ({ navigation }) => {
  const { addBlog } = useContext(Context);
  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default CreateScreens;
