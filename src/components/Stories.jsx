import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const storyInfo = [
  {
    id: 1,
    name: 'My story',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'Dongil',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 3,
    name: 'Tonny',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 4,
    name: 'Kiana',
    image: require('../../assets/images/profile3.jpeg'),
  },
  {
    id: 5,
    name: 'Patrick',
    image: require('../../assets/images/profile4.jpeg'),
  },
  {
    id: 6,
    name: 'Daniel',
    image: require('../../assets/images/profile5.jpeg'),
  },
];

export const Stories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id === 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: '#fff',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id === 1 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const style = StyleSheet.create({});
