import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';


import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>

      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>

          <Image 
            source={images.logo}
            className='w-[130px] h-[130px]'
            resizeMode='contain'
          />

          <Image 
            source={images.cards}
            className='max-w-[380px] w-full h-[200px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-2xl text-white font-bold text-center'>
              Create to the Extent of Your Imagination With{' '}
              <Text className='text-secondary'>GenieReel</Text>
            </Text>
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation: embark on a journey of limitless exploration 
            with GenieReel
          </Text>

          <CustomButton 
            title='Continue with Email'
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#37474F' style='light' />
    </SafeAreaView>
  );
};
