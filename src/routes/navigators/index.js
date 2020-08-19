import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { useHandlers } from "@hooks";
import { DriversScreen } from "@screens/drivers";
import { DriverProfileScreen } from "@screens/driver-profile";
import { InitialNavigationScreen } from "../../screens/init-navigation";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const { navigateBack } = useHandlers();

  return (
    <Stack.Navigator initialRouteName="NAVIGATION_NAVIGATOR">
      <Stack.Screen
        name="NAVIGATION_NAVIGATOR"
        component={InitialNavigationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DRIVERS_NAVIGATOR"
        component={DriversScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PROFILE_NAVIGATOR"
        component={DriverProfileScreen}
        options={{
          headerLeft: (props) => (
            <HeaderBackButton {...props} onPress={navigateBack} />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: "#f6f6f6",
          },
          headerTitle: "Profile",
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          gestureDirection: "horizontal",
        }}
      />
    </Stack.Navigator>
  );
};
