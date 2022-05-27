import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreens from "./src/screens/IndexScreens";
import { Provider } from "./src/context/BlogContext";
import ShowScreens from "./src/screens/ShowScreens";
import CreateScreens from "./src/screens/CreateScreens";

const navigator = createStackNavigator(
  {
    Index: IndexScreens,
    Show: ShowScreens,
    Create: CreateScreens,
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
    <Provider>
      <App />
    </Provider>
  );
};
