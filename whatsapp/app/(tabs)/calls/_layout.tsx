import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: 'Calls',
          headerTitleAlign: 'center',
          headerBlurEffect: 'regular',
          headerSearchBarOptions: {
            placeholder: 'Search Calls',
            headerIconColor: Colors.primary,
          },
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name='call-outline' color={Colors.primary} size={30} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
