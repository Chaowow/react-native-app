import { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  Platform, 
  KeyboardAvoidingView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { images } from '../../constants';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
       <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className='flex-1'
      >
        <ScrollView>
          <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
            <Image 
              source={images.logo} 
              resizeMode='contain'
              className='w-[90px] h-[70px]' 
            />
            
            <Text className='text-xl text-white text-semibold mt-6 font-psemibold'>
              Sign up to GenieReel
            </Text>

            <FormField 
              title='Username'
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e})}
              otherStyles='mt-7'
            />

            <FormField 
              title='Email'
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e})}
              otherStyles='mt-5'
              keyboardType='email-address'
            />

            <FormField 
              title='Password'
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e})}
              otherStyles='mt-5'     
            />

            <CustomButton
              title='Sign Up'
              handlePress={submit}
              containerStyles='mt-7'
              isLoading={isSubmitting}
            />
            <View className='justify-center pt-5 flex-row gap-2'>
              <Text className='text lg text-gray-100 font-pregular'>
                Have an account?
              </Text>
              <Link href='/sign-in' className='text-l font-psemibold text-secondary'>
                Sign In
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;