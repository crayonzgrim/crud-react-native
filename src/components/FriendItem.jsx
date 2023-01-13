import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const FriendItem = ({ data, name }) => {
  /** Property */
  const [follow, setFollow] = useState(false)
  const [isClose, setIsClose] = useState(false)

  /** Function */

  /** Render */
  return (
    <View>
      {data.name === name || isClose ? null : (
        <View
          style={{
            width: 160,
            height: 200,
            margin: 3,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: '#DEDEDE',
            borderRadius: 2,
            position: 'relative'
          }}
        >
          <TouchableOpacity
            onPress={() => setIsClose(true)}
            style={{
              position: 'absolute',
              top: 10,
              right: 10
            }}
          >
            <AntDesign
              name="close"
              style={{
                fontSize: 20,
                color: '#000',
                opacity: 0.5
              }}
            />
          </TouchableOpacity>
          <Image
            source={data.profileImage}
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              margin: 10
            }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{data.name}</Text>
          <Text style={{ fontSize: 12 }}>{data.accountName}</Text>
          <TouchableOpacity
            onPress={() => setFollow(prev => !prev)}
            style={{ width: '80%', paddingVertical: 10 }}
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
      )}
    </View>
  )
}
