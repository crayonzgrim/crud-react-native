import React from 'react'
import { Image, Text, View } from 'react-native'

export const ProfileBody = ({
  name,
  profileImage,
  post,
  followers,
  following
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <Image
          source={profileImage}
          style={{
            resizeMode: 'cover',
            width: 80,
            height: 80,
            borderRadius: 100
          }}
        />
        <Text
          style={{
            paddingVertical: 5,
            fontWeight: 'bold'
          }}
        >
          {name}
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{post}</Text>
        <Text>게시물</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{followers}</Text>
        <Text>팔로워</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{following}</Text>
        <Text>팔로잉</Text>
      </View>
    </View>
  )
}
