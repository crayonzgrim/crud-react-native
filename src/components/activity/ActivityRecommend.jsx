import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const ActivityRecommend = ({ data }) => {
  /** Property */
  const navigation = useNavigation()
  const [follow, setFollow] = useState(data.follow)
  const [close, setClose] = useState(false)

  /** Function */
  const onPressHandler = () => {
    navigation.push('FriendProfile', {
      name: data.name,
      profileImage: data.profileImage,
      follow: follow,
      post: data.posts,
      followers: data.followers,
      following: data.following
    })
  }

  const followHandler = () => {
    setFollow(!follow)
  }

  /** Render */
  return (
    <View>
      {close ? null : (
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                maxWidth: '64%'
              }}
              onPress={onPressHandler}
            >
              <Image
                source={data.profileImage}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 100,
                  marginRight: 10
                }}
              />
              <View style={{ width: '100%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                  {data.name}
                </Text>
                <Text style={{ fontSize: 12, opacity: 0.5 }}>
                  {data.accountName}
                </Text>
                <Text style={{ fontSize: 12, opacity: 0.5 }}>
                  회원님을 위한 추천
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {follow ? (
              <TouchableOpacity
                style={{ width: follow ? 90 : 68 }}
                onPress={() => setFollow(!follow)}
              >
                <View
                  style={{
                    width: '100%',
                    height: 30,
                    borderRadius: 5,
                    backgroundCOlor: follow ? null : '#3493D9',
                    borderWidth: follow ? 1 : 0,
                    borderColor: '#DEDEDE',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: follow ? '#000' : '#fff' }}>
                    {follow ? 'following' : 'follow'}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  style={{ width: follow ? 90 : 68 }}
                  onPress={() => setFollow(!follow)}
                >
                  <View
                    style={{
                      width: '100%',
                      height: 30,
                      borderRadisu: 5,
                      borderColor: '#DEDEDE',
                      backgroundColor: follow ? null : '#3493D9',
                      borderWidth: follow ? 1 : 0,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Text style={{ color: follow ? '#000' : '#fff' }}>
                      {follow ? 'following' : 'follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ paddingHorizontal: 10 }}
                  onPress={() => setClose(true)}
                >
                  <AntDesign
                    name="close"
                    style={{ fontSize: 14, color: '#000', opacity: 0.8 }}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  )
}
