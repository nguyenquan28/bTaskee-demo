import React from 'react';
import Login from './src/screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screen/Register';

const App = () => {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Đăng nhập'
          component={Login}
        />
        <Stack.Screen
          name='Đăng ký'
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
