import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionic from 'react-native-vector-icons/Ionicons'

import { Home } from './src/screens/Home'
import { Search } from './src/screens/Search'
import { Activity } from './src/screens/Activity'
import { Profile } from './src/screens/Profile'
import { Status } from './src/screens/Status'
import { EditProfile } from './src/screens/EditProfile'
import { FriendProfile } from './src/screens/FriendProfile'

const App = () => {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline'
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline'
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline'
            }

            return <Ionic name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
