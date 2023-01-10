import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { ActivityPrevious } from '../components/activity/ActivityPrevious'
import { ActivityRecommend } from '../components/activity/ActivityRecommend'
import { ActivityThisWeek } from '../components/activity/ActivityThisWeek'
import { FriendsProfileData } from '../datas/friendsProfileData'

export const Activity = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: '#fff'
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomWidth: 0.5,
          borderBottomColor: '#DEDEDE',
          padding: 10
        }}
      >
        활동
      </Text>
      <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
        <ActivityThisWeek />
        <Text style={{ fontWeight: 'bold' }}>이전 활동</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => {
          return <ActivityPrevious data={data} />
        })}
        <Text style={{ fontWeight: 'bold', paddingVertical: 10 }}>
          회원님을 위한 추천
        </Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => {
          return <ActivityRecommend />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}
