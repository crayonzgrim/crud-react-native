import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ProfileBody } from '../components/ProfileBody'
import { ProfileButton } from '../components/ProfileButton'
import Entypo from 'react-native-vector-icons/Entypo'

export const Profile = () => {
  let circles = []
  let numberOfCircles = 10

  for (let i = 0; i < numberOfCircles; i++) {
    circles.push(
      <View key={i}>
        {i === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View>
              <Entypo
                name="plus"
                plus
                style={{ fontSize: 40, color: '#000' }}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: '#000',
              opacity: 0.1,
              marginHorizontal: 5
            }}
          />
        )}
      </View>
    )
  }

  return (
    <SafeAreaView style={{ width: '100%', backgroundColor: '#fff' }}>
      <View style={{ width: '100%', padding: 10 }}>
        <ProfileBody
          name="Dongil"
          accountName="dongil"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="300"
          following="35"
          post="458"
        />
      </View>
      <ProfileButton
        id={0}
        name="Dongil"
        accountName="dongil"
        profileImage={require('../../assets/images/userProfile.jpeg')}
      />
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            horizontal: 10
          }}
        >
          {circles}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
