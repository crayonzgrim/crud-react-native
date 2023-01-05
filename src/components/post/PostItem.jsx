import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {PostAction} from './PostAction';
import {PostComments} from './PostComments';

export const PostItem = ({data}) => {
  const [like, setLike] = useState(data.isLiked);

  return (
    <View
      style={{
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={data.postPersonImage}
            style={{width: 40, height: 40, borderRadius: 100}}
          />
          <View style={{paddingLeft: 5}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {data.postTitle}
            </Text>
          </View>
        </View>
        <Feather name="more-vertical" style={{fontSize: 20}} />
      </View>
      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={data.postImage} style={{width: '100%', height: 400}} />
      </View>
      <PostAction data={data} like={like} setLike={setLike} />
      <PostComments data={data} like={like} setLike={setLike} />
    </View>
  );
};
