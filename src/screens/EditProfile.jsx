import React from 'react'
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export const EditProfile = ({ navigation, route }) => {
  const { name, accountName, profileImage } = route.params

  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: '#fff'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold'
            }}
          >
            취소
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold'
          }}
        >
          프로필 수정
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: '#3493d9'
            }}
          >
            완료
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={profileImage}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        <Text style={{ color: '#3493d9', marginTop: 10 }}>
          프로필 사진 바꾸기
        </Text>
      </View>

      <View style={{ paddingVertical: 10 }}>
        <View style={{ opacity: 10 }}>
          <Text style={{ opacity: 0.5 }}>이름</Text>
          <TextInput
            placeholder="이름"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD'
            }}
          />
        </View>
      </View>

      <View style={{ paddingVertical: 10 }}>
        <View style={{ opacity: 10 }}>
          <Text style={{ opacity: 0.5 }}>사용자 이름</Text>
          <TextInput
            placeholder="사용자 이름"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD'
            }}
          />
        </View>
      </View>

      <View style={{ paddingVertical: 10 }}>
        <View style={{ opacity: 10 }}>
          <Text style={{ opacity: 0.5 }}>웹사이트</Text>
          <TextInput
            placeholder="웹사이트"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD'
            }}
          />
        </View>
      </View>

      <View style={{ paddingVertical: 10 }}>
        <View
          style={{
            opacity: 10
          }}
        >
          <Text style={{ opacity: 0.5 }}>소개</Text>
          <TextInput
            placeholder="소개"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD'
            }}
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            marginVertical: 5,
            padding: 10,
            color: '#345429'
          }}
        >
          프로페셔널 계정으로 전환
        </Text>
        <Text
          style={{
            marginVertical: 5,
            padding: 10,
            color: '#345429'
          }}
        >
          개인정보 설정
        </Text>
      </View>
    </SafeAreaView>
  )
}
