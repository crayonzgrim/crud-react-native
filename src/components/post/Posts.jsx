import React from 'react';
import {Text, View} from 'react-native';
import {postInfo} from '../../datas/postInfo';
import {PostItem} from './PostItem';

export const Posts = () => {
  return (
    <View>
      {postInfo.map((info, index) => {
        return <PostItem data={info} key={index} />;
      })}
    </View>
  );
};
