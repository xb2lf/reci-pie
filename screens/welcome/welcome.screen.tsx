import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';

const WelcomeScreen = () => {
  const router = useRouter();
  const handleToRecipeList = () => {
    router.push('/(routes)/recipe-list');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.welcomeContainer}>
        <Image
          source={require('@/assets/images/welcome1.png')}
          style={{ width: wp(100), height: hp(60), marginTop: 30 }}
        />
        <Text style={styles.welcomeMainTitle}>40K+ Premium Recipes</Text>
        <Text style={styles.welcomeTitle}>Cook Like A Chef</Text>
        <TouchableOpacity style={styles.goButton} onPress={handleToRecipeList}>
          <Text style={styles.goButtonText}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeMainTitle: {
    fontSize: 22,
    color: '#f96163',
    fontWeight: 'bold',
  },
  welcomeTitle: {
    fontSize: 42,
    color: '#3c444c',
    fontWeight: 'bold',
    marginTop: 44,
    marginBottom: 40,
  },
  goButton: {
    width: wp(80),
    backgroundColor: '#f96163',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
  },
  goButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
});

export default WelcomeScreen;
