import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='flex flex-col items-center justify-center p-4'>

          <Image 
            source={images.logo}
            className='w-[130px] h-[90px]'
            resizeMode='contain'
          />

          <Image 
            source={images.cards}
            className='max-w-[380px] w-full h-[150px]'
            resizeMode='contain'
          />

          <View className='mt-3'>
            <Text className='text-2xl text-white font-bold text-center'>
              Create to the Extent of Your Imagination With{' '}
              <Text className='text-secondary'>GenieReel</Text>
            </Text>
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-5 text-center'>
            Where creativity meets innovation: embark on a journey of limitless exploration 
            with GenieReel
          </Text>

        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
