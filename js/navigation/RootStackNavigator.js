import { createStackNavigator, createAppContainer } from "react-navigation";
import AboutStack from "./NavigationLayout";
import ScheduleStack from "./NavigationLayout";
import FavesStack from "./NavigationLayout";
import MapStack from "./NavigationLayout";

const AppNavigator = createStackNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
