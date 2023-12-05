import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

import MainScreen from "./page";
import AttributeScreen from "./page/sub/attribute";
import AllergyScreen from "./page/sub/allergy";
import CustomScreen from "./page/sub/CustomScreen";
import EndScreen from "./page/sub/end";

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="MainScreen">
          <Stack.Screen
              name="MainScreen"
              component={MainScreen}
          />
            <Stack.Screen
                name="AttributeScreen"
                component={AttributeScreen}
            />
            <Stack.Screen
                name="AllergyScreen"
                component={AllergyScreen}
            />
            <Stack.Screen
                name="CustomScreen"
                component={CustomScreen}
            />
            <Stack.Screen
                name="EndScreen"
                component={EndScreen}
            />

        </Stack.Navigator>
      </NavigationContainer>
  );
}