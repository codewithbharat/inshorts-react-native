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
    {/* News Box */}
    <View style={{padding: 25}}>
      <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quam laborum nisi similique sed explicabo eos magnam est cum vel? </Text>
      <Text style={{fontSize: 18, textAlign : 'justify', lineHeight: 30, marginTop: 10}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, quaerat suscipit vitae esse, aliquid, veritatis doloribus eveniet voluptatem dolor blanditiis nihil voluptatum. Magni, at non modi quod illum error ullam optio, dolores cum facilis eum? Rem maiores unde obcaecati suscipit id, voluptates autem officia, delectus facilis temporibus nam culpa similique? Fuga enim, eveniet incidunt facere laboriosam est. Est, hic vero. </Text>
    </View>
    </View>
  )
}

export default Home