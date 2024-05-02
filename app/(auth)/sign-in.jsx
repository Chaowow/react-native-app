import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';

const SignIn = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image 
            source={images.logo} 
            resizeMode='contain'
            className='w-[115px] h-[70px]' 
          />
          
          <Text className='text-xl text-white text-semibold mt-6 font-psemibold'>
            Log in to GenieReel
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;