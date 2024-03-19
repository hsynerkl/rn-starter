import { TouchableOpacity, View } from "react-native";
import Home from "../screens/Main/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Path, Svg } from "react-native-svg";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#FFF",
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          borderRadius: 30,
          height: 50,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
        },
      }}
    >
      <Tab.Screen
        name="Menu"
        component={Home}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              style={{
                borderRadius: 999,
                padding: 8,
                backgroundColor: "#dbeafe",
              }}
            >
              <Svg
                fill={"#9d8ff6"}
                width={22}
                height={22}
                viewBox="0 0 1024 1024"
              >
                <Path d="M96 448H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32m896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32M96 704H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32m896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32M96 192H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32m224 96h672c17.664 0 32-14.336 32-32s-14.336-32-32-32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32" />
              </Svg>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              style={{
                borderRadius: 999,
                padding: 8,
                backgroundColor: "#dbeafe",
              }}
            >
              <Svg
                fill={"#9d8ff6"}
                viewBox="-2 -2 24 24"
                width={22}
                height={22}
              >
                <Path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2z" />
              </Svg>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              style={{
                borderRadius: 999,
                padding: 8,
                backgroundColor: "#dbeafe",
              }}
            >
              <Svg fill={"#9d8ff6"} width={22} height={22} viewBox="0 0 24 24">
                <Path d="m20.873 18.68-2.217 2.217-2.838-.79-.811.334L13.55 23h-3.135l-1.449-2.567-.81-.34-2.838.781-2.216-2.216.79-2.838-.334-.811L1 13.55v-3.135l2.568-1.449.34-.81-.781-2.838 2.215-2.215 2.838.791.81-.334L10.446 1h3.136l1.449 2.568.81.34 2.837-.781 2.22 2.215-.792 2.839.335.81L23 10.447v3.136l-2.567 1.448-.34.813zm-2.892-2.972.872-2.082L21 12.414v-.804l-2.147-1.22-.859-2.083.662-2.375-.569-.568-2.383.655-2.08-.872L12.413 3h-.804l-1.22 2.147-2.083.859-2.376-.663-.566.566.655 2.383-.872 2.08L3 11.583v.805l2.145 1.222.859 2.083-.662 2.376.567.567 2.383-.655 2.08.872 1.21 2.146h.805l1.222-2.145 2.083-.859 2.376.662.568-.568zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              </Svg>
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
