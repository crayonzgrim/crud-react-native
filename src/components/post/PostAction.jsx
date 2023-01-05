import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const PostAction = ({data, like, setLike}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 15,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setLike(!like)}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{
              paddingRight: 10,
              fontSize: 20,
              color: like ? 'red' : 'black',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionic
            name="ios-chatbubble-outline"
            style={{fontSize: 20, paddingRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="navigation" style={{fontSize: 20}} />
        </TouchableOpacity>
      </View>
      <Feather name="bookmark" style={{fontSize: 20}} />
    </View>
  );
};
