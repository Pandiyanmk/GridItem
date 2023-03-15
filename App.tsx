import React from 'react';
import MenuScreen from './Screen/MenuScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './Screen/MealsOverViewScreen';
import MealsDetailScreen from './Screen/MealsDetailScreen';


function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#9eecff' },
        headerTintColor: 'black'
      }}>
        <Stack.Screen name="MealsCategories"
          component={MenuScreen}
          options={{
            title: 'ALL CATEGORIES'
          }} />
        <Stack.Screen
          name="MealsOverView"
          component={MealsOverViewScreen}
        />
        <Stack.Screen
          name="MealsDetail"
          component={MealsDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
