import PushNotificationIOS from '@react-native-community/push-notification-ios'
import React, { useState } from 'react'
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import PushNotification from 'react-native-push-notification'
import Feather from 'react-native-vector-icons/Feather'
import { PostAction } from './PostAction'
import { PostComments } from './PostComments'

export const PostItem = ({ data }) => {
  const [like, setLike] = useState(data.isLiked)

  const handleNotification = title => {
    if (Platform === 'ios') {
      // PushNotificationIOS.addNotificationRequest({
      //   id: title,
      //   title: `${title}을 클릭했습니다!`,
      //   body: '메세지 입니다'
      // })

      PushNotificationIOS.addNotificationRequest({
        id: title,
        title: `${title}을 클릭했습니다!`,
        body: '메세지 입니다',
        fireDate: new Date(Date.now() + 5 * 1000)
      })
    } else {
      PushNotification.getChannels(channel_ids => {
        console.log(channel_ids)
      })

      PushNotification.cancelAllLocalNotifications()

      PushNotification.localNotification({
        channelId: 'insta-channel',
        title: `${title}를 클릭했습니다`,
        message: `메세지 입니다`,
        color: '#000',
        bigText: 'My big text',
        date: new Date(Date.now() + 5 * 1000),
        allowWhileIdle: true
      })
    }
  }

  return (
    <View
      style={{
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleNotification(data.postTitle)}>
            <Image
              source={data.postPersonImage}
              style={{ width: 40, height: 40, borderRadius: 100 }}
            />
          </TouchableOpacity>
          <View style={{ paddingLeft: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {data.postTitle}
            </Text>
          </View>
        </View>
        <Feather name="more-vertical" style={{ fontSize: 20 }} />
      </View>
      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image source={data.postImage} style={{ width: '100%', height: 400 }} />
      </View>
      <PostAction data={data} like={like} setLike={setLike} />
      <PostComments data={data} like={like} setLike={setLike} />
    </View>
  )
}
