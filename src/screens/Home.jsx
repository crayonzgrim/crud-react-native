import React, { useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { Posts } from '../components/post/Posts'
import { Stories } from '../components/Stories'
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import PushNotification from 'react-native-push-notification'

export const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={{ fontSize: 25, fontWeight: '500' }}>Instagram</Text>
        </View>
        <View style={styles.headerIcons}>
          <FontAwesome
            name="plus-square-o"
            style={{ fontSize: 24, paddingHorizontal: 15 }}
          />
          <Feather name="navigation" style={{ fontSize: 24 }} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  headerText: {},
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
