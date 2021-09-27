import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyle } from '@/Styles';

import { HomeScreen } from '@/Screens';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <SafeAreaView style={CommonStyle.fill}>
      <NavigationContainer initialRouteName="Home">
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              animationEnabled: false,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
