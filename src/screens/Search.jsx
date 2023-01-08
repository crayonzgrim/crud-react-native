import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {SearchInput} from '../components/SearchInput';

export const Search = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: '#fff',
        position: 'relative',
      }}>
      <ScrollView>
        <SearchInput />
      </ScrollView>
    </SafeAreaView>
  );
};
