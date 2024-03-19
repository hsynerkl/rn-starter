import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useAuth } from "../context/Auth";
import HomeTabs from "./HomeTabs";

const RoutesComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer theme={DefaultTheme}>
      {isLoggedIn ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RoutesComponent;
