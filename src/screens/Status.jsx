import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Ionic from 'react-native-vector-icons/Ionicons';

export const Status = ({route, navigation}) => {
  const {name, image} = route.params;

  const progress = useRef(new Animated.Value(0)).current;

  const statusBarHeight = getStatusBarHeight();

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  /** Render */
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View
        style={{
          marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
          height: 3,
          width: '100%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: '#fff',
            width: progressAnimation,
          }}
        />
      </View>
      <View
        style={{
          marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          padding: 15,
          width: '90%',
        }}>
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.name}>
          <Text style={{color: '#fff', fontSize: 15, paddingLeft: 10}}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{fontSize: 20, color: '#fff', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{position: 'absolute', width: '100%', height: 600}}
      />
      <View style={styles.bottom} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    justifyContent: 'center',
  },
  imageWrapper: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'orange',
    borderRadius: 100,
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
  },
  name: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
});
