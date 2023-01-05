import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

export const PostComments = ({data, like, setLike}) => {
  return (
    <View style={{paddingHorizontal: 15}}>
      <Text>좋아요 {like ? data.likes + 1 : data.likes}개</Text>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 14,
          paddingVertical: 2,
        }}>
        게시글 설명글입니다
      </Text>
      <Text
        style={{
          opacity: 0.4,
          paddingVertical: 2,
          marginTop: 5,
          marginBottom: 5,
        }}>
        댓글 모두 보기
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alginItems: 'center'}}>
          <Image
            source={data.postPersonImage}
            style={{
              width: 25,
              height: 25,
              borderRadius: 100,
              backgroundColor: 'orange',
              marginRight: 10,
            }}
          />
          <TextInput placeholder="댓글 달기..." style={{opacity: 0.5}} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#0095F6'}}>개시</Text>
        </View>
      </View>
    </View>
  );
};
