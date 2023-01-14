import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { searchData } from './searchData'

export const SearchContent = ({ getData }) => {
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width: '100%'
                }}
              >
                {data.images.map((image, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPressIn={() => getData(image)}
                      onPressOut={() => getData(null)}
                      style={{
                        paddingBottom: 2,
                        width: '33%'
                      }}
                    >
                      <Image
                        source={image}
                        style={{ width: '100%', height: 150 }}
                      />
                    </TouchableOpacity>
                  )
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '66.5%',
                    justifyContent: 'space-between'
                  }}
                >
                  {data.images.slice(0, 4).map((image, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPressIn={() => getData(image)}
                        onPressOut={() => getData(null)}
                        style={{ paddingBottom: 2, width: '49.5%' }}
                      >
                        <Image
                          source={image}
                          style={{ width: '100%', height: 150 }}
                        />
                      </TouchableOpacity>
                    )
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => getData(image)}
                  onPressOut={() => getData(null)}
                  style={{ marginLeft: 2, width: '33%' }}
                >
                  <Image
                    source={data.images[5]}
                    style={{ width: '100%', height: 300 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <TouchableOpacity
                  onPressIn={() => getData(image)}
                  onPressOut={() => getData(null)}
                  style={{ paddingRight: 2, width: '66.5%' }}
                >
                  <Image
                    source={data.images[2]}
                    style={{ width: '100%', height: 300 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '33%',
                    justifyContent: 'space-between'
                  }}
                >
                  {data.images.slice(0, 2).map((image, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPressIn={() => getData(image)}
                        onPressOut={() => getData(null)}
                        style={{ paddingBottom: 2, width: '100%' }}
                      >
                        <Image
                          source={image}
                          style={{ width: '100%', height: 150 }}
                        />
                      </TouchableOpacity>
                    )
                  })}
                </View>
              </View>
            ) : null}
          </View>
        )
      })}
    </View>
  )
}
