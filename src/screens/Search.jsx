import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {SearchContent} from '../components/SearchContent';
import {SearchInput} from '../components/SearchInput';
import {Modal} from './Modal';

export const Search = () => {
  /** Property */
  const [image, setImage] = useState(null);

  /** Function */
  const getData = data => {
    setImage(data);
  };

  /** Render */
  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: '#fff',
        position: 'relative',
      }}>
      <ScrollView>
        <SearchInput />
        <SearchContent getData={getData} />
      </ScrollView>
      {image ? <Modal image={image} /> : null}
    </SafeAreaView>
  );
};
