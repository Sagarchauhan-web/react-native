import { Tabs } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.background,
            paddingBottom: 10,
            paddingTop: 10,
            height: 60,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveBackgroundColor: Colors.background,
          tabBarActiveBackgroundColor: Colors.background,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
        }}
      >
        <Tabs.Screen
          name='updates'
          options={{
            title: 'Updates',
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='update' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='chats'
          options={{
            title: 'Chats',
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='chat' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='calls'
          options={{
            headerShown: false,
            title: 'Calls',
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='call' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='communities'
          options={{
            title: 'Communities',
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='group' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='settings'
          options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='settings' size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;
