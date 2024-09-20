import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const Home = () => {

  const {width} = Dimensions.get('window')
  return (
   <View style={{flex: 1}}>
      {/* Image Box  */}
     <View style={{ width: width, height: width * 9/16 }}>
      <Image
        source={{
          uri: 'https://i.imgur.com/7Yv3b6d.png',
        }}
        style={{ width: width, height: width * 9/16 }}
      />
      <Text style={{
        paddingHorizontal: 10, 
        borderRadius: 20, 
        marginTop : -10, 
        marginLeft: 10, 
        backgroundColor: 'white', 
        alignSelf: 'flex-start',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
        }}>inshorts</Text>
    </View>
    </View>
  )
}

export default Home