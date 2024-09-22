import { View, Text, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Home = () => {

  interface MappedNewsItem {
    id: string;
    imgUrl: string;
    title: string;
    shortDescription: string;
    sourceLink: string;
  }

  const [newsData, setNewsData] = useState<MappedNewsItem[]>([])

  const {width, height} = Dimensions.get('window')

  // axios call to get news data
  useEffect(() => {
    const fetchData = async () => {
      // axios call to get news data
      const options = {
        method: 'GET',
        url: 'https://real-time-news-data.p.rapidapi.com/topic-news-by-section',
        params: {
          topic: 'TECHNOLOGY',
          section: 'CAQiW0NCQVNQZ29JTDIwdk1EZGpNWFlTQW1WdUdnSlZVeUlQQ0FRYUN3b0pMMjB2TURKdFpqRnVLaGtLRndvVFIwRkVSMFZVWDFORlExUkpUMDVmVGtGTlJTQUJLQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURkak1YWVNBbVZ1R2dKVlV5Z0FQAVAB',
          limit: '50',
          country: 'US',
          lang: 'en'
        },
        headers: {
          'x-rapidapi-key': process.env.EXPO_PUBLIC_RAPID_API_KEY,
          'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        const data = response.data.data;
        interface NewsItem {
          photo_url: string;
          title: string;
          snippet: string;
          link: string;
        }

        const fetchedData: MappedNewsItem[] = data.map((item: NewsItem) => {
          return {
            id: Math.random().toString(36).substring(7),
            imgUrl: item.photo_url,
            title: item.title,
            shortDescription: item.snippet,
            sourceLink: item.link
          };
        });

        console.log(fetchedData);
        setNewsData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  
  type renderNewsProps = {
    id: string,
    imgUrl: string,
    title: string,
    shortDescription: string
  }

  const RenderNews: React.FC<{ item: renderNewsProps, width: number, height: number }> = ({ item, width, height }) => {
    return (
      <View style={{ height: height, width: width }}>
        {/* Image Box  */}
        <View style={{ width: width, height: width * 9 / 16 }}>
          <Image
            source={{
              uri: item.imgUrl,
            }}
            style={{ width: width, height: width * 9 / 16 }}
          />
          <Text style={{
            paddingHorizontal: 10,
            borderRadius: 20,
            marginTop: -10,
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
        <View style={{ padding: 25 }}>
          <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
          <Text style={{ fontSize: 18, textAlign: 'justify', lineHeight: 30, marginTop: 10 }}>{item.shortDescription}</Text>
        </View>
      </View>
    );
  };

  const renderNews = ({ item }: { item: renderNewsProps }) => {
    return <RenderNews item={item} width={width} height={height} />;
  };

  if (newsData.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={newsData}
      renderItem={renderNews}
      keyExtractor={(item) => item.id}
      pagingEnabled // Enable one item per swipe
      snapToAlignment="start" // Align the first item to the start of the screen
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
    />
  )
}

export default Home