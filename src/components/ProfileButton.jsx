import { useNavigation } from '@react-navigation/native'
import React, { memo, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

export const ProfileButton = ({ id, name, accountName, profileImage }) => {
  /** Property */
  const navigation = useNavigation()
  const [follow, setFollow] = useState(follow)

  /** Function */

  /** Render */
  return (
    <>
      {id === 0 ? (
        <View></View>
      ) : (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            style={{ width: '42%' }}
            onPress={() => setFollow(!follow)}
          >
            <View
              style={{
                width: '100%',
                height: 35,
                borderRadius: 5,
                backgroundColor: follow ? null : '#3493D9',
                borderWidth: follow ? 1 : 0,
                borderColor: '#DEDEDE',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: follow ? '#000' : '#fff' }}>
                {follow ? '팔로잉' : '팔로우'}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '42%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5
            }}
          >
            <Text>메세지</Text>
          </View>
          <View
            style={{
              width: '10%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5
            }}
          >
            <Feather
              name="chevron-down"
              style={{ fontSize: 20, color: '#000' }}
            />
          </View>
        </View>
      )}
    </>
  )
}
