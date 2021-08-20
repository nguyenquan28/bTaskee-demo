import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Register from './src/screen/Register';
import VerifyCode from './src/screen/VerifyCode';
import SetPassword from './src/screen/SetPassword';
import Jobs from './src/screen/Jobs';
import Service from './src/screen/Service';
import Setting from './src/screen/Setting';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store';
import { Text } from 'react-native';
import LoginScreenContainer from './src/containers/LoginScreenContainer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// Tabs navigation
const tabScreen = () => (
  <Tab.Navigator
    initialRouteName="Scan"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Công việc') {
          iconName = focused
            ? 'list-circle'
            : 'list-circle-outline';
        }
        if (route.name === 'Dịch vụ') {
          iconName = focused ? 'options' : 'options-outline';
        }
        if (route.name === 'Cài đặt') {
          iconName = focused ? 'settings' : 'settings-outline'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#ff8c0f',
      tabBarInactiveTintColor: 'gray',
    })}
  >

    {/* Screen Menu */}
    <Tab.Screen
      testID='jobs'
      name="Công việc"
      component={Jobs}
      options={{
        title: 'Công việc',
        headerTintColor: '#000000',
        headerTitleAlign: 'center',
      }} />
    <Tab.Screen
      testID='service'
      name="Dịch vụ"
      component={Service}
      options={{
        title: 'Dịch vụ',
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }} />
    <Tab.Screen
      testID='setting'
      name="Cài đặt"
      component={Setting}
      options={{
        title: 'Cài đặt',
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }} />

  </Tab.Navigator>
);

// Main Navigation
const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={(<Text>Loading</Text>)} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Đăng nhập'
              component={LoginScreenContainer}
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
              options={{ headerShown: false }}
              name='Trang chủ'
              component={tabScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
