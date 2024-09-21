import { View, Text, Image, Dimensions, FlatList } from 'react-native'
import React from 'react'

const Home = () => {

  const {width, height} = Dimensions.get('window')

  // data for news
  const newsData = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/200/300?random=1",
      title: "Global Markets Rally Amid Economic Recovery",
      shortDescription: "Stock markets around the globe experienced a major rally today, as optimism surrounding economic recovery continues to grow. Investors are hopeful that recent policy changes and stimulus measures will pave the way for sustained growth. Key sectors, including technology and manufacturing, have shown significant improvement. While some analysts remain cautious about potential setbacks, today's gains are seen as a positive indicator for the near future."
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/200/300?random=2",
      title: "Breakthrough in Renewable Energy Technology",
      shortDescription: "A team of scientists has announced a breakthrough in renewable energy technology that could revolutionize the solar power industry. The new technology aims to make solar panels more efficient, capable of generating electricity even in low-light conditions. Experts believe this development could lead to a significant reduction in the cost of producing renewable energy, making it more accessible worldwide. This innovation is expected to drive further advancements in sustainability and energy independence."
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/200/300?random=3",
      title: "Wildfires Continue to Rage Across the West",
      shortDescription: "Wildfires have ravaged thousands of acres across the western United States, displacing communities and overwhelming firefighting efforts. The fires, fueled by dry conditions and strong winds, have prompted mass evacuations and left a trail of destruction in their wake. Officials warn that the situation could worsen in the coming days as temperatures rise. Authorities are urging residents to follow evacuation orders and prioritize safety as crews battle to contain the blazes."
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/200/300?random=4",
      title: "Tech Giant Unveils Latest Smartphone",
      shortDescription: "In a highly anticipated event, one of the world's leading tech companies has unveiled its newest smartphone model. Packed with innovative features such as advanced camera capabilities, longer battery life, and a more powerful processor, the device is expected to set new standards in the industry. Early reviews have praised the phone’s sleek design and user-friendly interface. Industry experts believe this release could help the company regain market share."
    },
    {
      id: 5,
      imgUrl: "https://picsum.photos/200/300?random=5",
      title: "Local Charity Event Raises Record Amount",
      shortDescription: "A charity event held in the heart of the community has raised an unprecedented amount of donations for local causes. Organizers credit the event's success to widespread participation, with local businesses and residents coming together to support various charitable efforts. The funds will go toward providing resources for underprivileged families, supporting education initiatives, and improving healthcare services. This year’s turnout and contributions exceeded all expectations, demonstrating the power of community solidarity."
    }
  ];
  
  
  type renderNewsProps = {
    id: number,
    imgUrl: string,
    title: string,
    shortDescription: string
  }

  // render NEWS
   const renderNews = ({ item }: { item: renderNewsProps }) => {
    return (
      <View style={{height: height, width: width}}>
      {/* Image Box  */}
     <View style={{ width: width, height: width * 9/16 }}>
      <Image
        source={{
          uri: item.imgUrl,
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
      <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>{item.title}</Text>
      <Text style={{fontSize: 18, textAlign : 'justify', lineHeight: 30, marginTop: 10}}>{item.shortDescription}</Text>
    </View>
    </View>
    )
   }


  return (
    <FlatList
      data={newsData} // Replace with your actual data
      renderItem={renderNews}
      keyExtractor={(item) => item.id.toString()}
      pagingEnabled // Enable one item per swipe
      snapToAlignment="start" // Align the first item to the start of the screen
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
    />
  )
}

export default Home