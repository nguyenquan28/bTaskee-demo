import React from 'react';
import Login from './src/screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screen/Register';
import VerifyCode from './src/screen/VerifyCode';
import SetPassword from './src/screen/SetPassword';
import Home from './src/screen/Home'
const App = () => {

  const Stack = createNativeStackNavigator();

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
        <Stack.Screen
          name='Đặt mật khẩu'
          component={SetPassword}
        />
        <Stack.Screen
          name='Trang chủ'
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
