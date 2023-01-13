import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { ProfileBody } from '../components/ProfileBody'
import { ProfileButton } from '../components/ProfileButton'
import { FriendsProfileData } from '../datas/friendsProfileData'
import { FriendItem } from '../components/FriendItem'

export const FriendProfile = ({ route, navigation }) => {
  /** Property */
  const { name, profileImage, post, followers, following } = route.params

  /** Function */

  /** Render */
  return (
    <SafeAreaView style={{ width: '100%', backgroundColor: '#fff' }}>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={{ fontSize: 20, color: '#000' }} />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '92%'
            }}
          >
            <Text style={{ fontSize: 15, marginLeft: 10, fontWeight: 'bold' }}>
              {name}
            </Text>
            <Feather
              name="more-vertical"
              style={{ fontSize: 20, color: '#000' }}
            />
          </View>
        </View>

        <ProfileBody
          name={name}
          profileImage={profileImage}
          post={post}
          followers={followers}
          following={following}
        />
        <ProfileButton id={1} name={name} profileImage={profileImage} />
        <Text
          style={{
            paddingVertical: 10,
            fontSize: 15,
            fontWeight: 'bold'
          }}
        >
          회원님을 위한 추천
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          style={{ padding: 10 }}
        >
          {name === FriendsProfileData.name
            ? null
            : FriendsProfileData.map((data, index) => (
                <FriendItem key={index} data={data} name={name} />
              ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
