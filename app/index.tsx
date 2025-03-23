import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';

const Index = () => {
  return <Redirect href='/(routes)/welcome' />;
};

export default Index;
