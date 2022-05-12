import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreens from "./src/screens/IndexScreens";
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreens,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
