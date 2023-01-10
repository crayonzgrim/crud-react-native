import { useNavigation } from '@react-navigation/native'
import React, { memo, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export const ActivityPrevious = ({ data }) => {
  /** Property */
  const navigation = useNavigation()

  const [follow, setFollow] = useState(data.follow)

  /** Function */
  const onPressHandler = () => {
    navigation.push('FirendProfile', {
      name: data.name,
      profileImage: data.profileImage,
      follow: follow,
      post: data.posts,
      followers: data.followers,
      following: data.following
    })
  }

  /** Render */
  return (
    <View style={{ width: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
          width: '100%'
        }}
      >
        <TouchableOpacity
          onPress={onPressHandler}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '64%'
          }}
        >
          <Image
            source={data.profileImage}
            style={{
              width: 45,
              height: 45,
              borderRaidus: 100,
              marginRight: 10
            }}
          />
          <Text style={{ fontSize: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFollow(!follow)}
          style={{ width: follow ? 72 : 68 }}
        >
          <View
            style={{
              width: '100%',
              height: 30,
              borderRadius: 5,
              backgroundColor: follow ? null : '#3493D9',
              borderWidth: follow ? 1 : 0,
              borderColor: follow ? '#DEDEDE' : null,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ color: follow ? '#000' : '#fff' }}>
              {follow ? 'Following' : 'Follow'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}