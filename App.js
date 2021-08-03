import React from 'react';
import Login from './src/screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screen/Register';
import VerifyCode from './src/screen/VerifyCode';
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
        <Stack.Screen
          name='Xác thực tài khoản'
          component={VerifyCode}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
