import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: 'Settings',
          headerTitleAlign: 'center',
          headerSearchBarOptions: { placeholder: 'Search Settings' },
        }}
      />
    </Stack>
  );
};

export default Layout;
