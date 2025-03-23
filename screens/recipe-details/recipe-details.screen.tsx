/*
 * @Author: {baixiao}
 * @version:
 * @Date: 2025-03-23 14:18:44
 * @LastEditors: {baixiao}
 * @LastEditTime: 2025-03-23 17:29:01
 * @Description:
 */
import { recipeList } from '@/constants';
import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RecipeDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const recipe = recipeList.find((item) => item.id === id);
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: recipe?.color }]}>
      {/* Header */}
      <SafeAreaView
        style={[
          styles.recipeHeaderContainer,
          { paddingTop: Platform.OS === 'ios' ? 0 : hp(1) },
        ]}
      >
        {/* Back Button */}
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <FontAwesome name='arrow-circle-left' size={28} color='#fff' />
        </Pressable>
        <FontAwesome name={'heart-o'} size={28} color='#fff' />
      </SafeAreaView>
      {/* Content */}
      <View style={styles.recipeDetailContent}>
        {/* Recipe Image */}
        <View style={styles.recipeImageContainer}>
          <Image
            source={recipe?.image}
            style={styles.recipeImage}
            contentFit='contain'
          />
        </View>
        {/* Recipe Name */}
        <Text style={styles.recipeNameText}>{recipe?.name}</Text>
        {/* Recipe Other Info */}
        <View style={styles.recipeOtherInfoContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Recipe Description */}
            <Text style={styles.recipeDescriptionText}>
              {recipe?.description}
            </Text>
            {/* Recipe Extra Details */}
            <View style={styles.recipeExtraDetails}>
              {/* Recipe Time */}
              <View style={styles.recipeTimeContainer}>
                <Text style={styles.recipeTimeIcon}>⏰</Text>
                <Text style={styles.recipeTimeText}>{recipe?.time}</Text>
              </View>
              {/* Recipe Difficulty */}
              <View
                style={[
                  styles.recipeTimeContainer,
                  { backgroundColor: 'rgba(135, 206, 235, 0.8)' },
                ]}
              >
                <Text style={styles.recipeTimeIcon}>🥣</Text>
                <Text style={styles.recipeTimeText}>{recipe?.difficulty}</Text>
              </View>
              {/* ReCipe Calories */}
              <View
                style={[
                  styles.recipeTimeContainer,
                  { backgroundColor: 'rgba(255, 165, 0, 0.48)' },
                ]}
              >
                <Text style={styles.recipeTimeIcon}>🔥</Text>
                <Text style={styles.recipeTimeText}>{recipe?.calories}</Text>
              </View>
            </View>
            {/* Recipe Ingredients  */}
            <View style={styles.recipeIngredientsContainer}>
              <Text style={styles.recipeIngredientsTitle}>Ingredients:</Text>
              {!!recipe?.ingredients.length &&
                recipe.ingredients.map((ingredient, index) => (
                  <View key={index} style={styles.ingredientItemContainer}>
                    <View style={styles.ingredientItemCircle}></View>
                    <Text style={styles.ingredientItemText}>{ingredient}</Text>
                  </View>
                ))}
            </View>
            {/* Recipe Steps */}
            <View style={styles.recipeStepsContainer}>
              <Text style={styles.recipeStepsTitle}>Steps:</Text>
              {!!recipe?.steps.length &&
                recipe?.steps.map((step, i) => (
                  <Text key={i} style={styles.recipeStepsName}>{`${
                    i + 1
                  }${' ) '}${step}`}</Text>
                ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipeHeaderContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  backButton: {
    flex: 1,
  },
  recipeDetailContent: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 140,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  recipeImageContainer: {
    // backgroundColor: "red",
    height: 300,
    width: 300,
    position: 'absolute',
    top: -150,
    // marginBottom: 130,
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  recipeNameText: {
    marginTop: 150,
    fontSize: 28,
    fontWeight: 'bold',
  },
  recipeOtherInfoContainer: {
    flex: 1,
  },
  recipeDescriptionText: {
    fontSize: 20,
    marginVertical: 16,
  },
  recipeExtraDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: "100%",
  },
  recipeTimeContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.38)',
    // paddingHorizontal: 16,
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
  },
  recipeTimeIcon: {
    fontSize: 40,
  },
  recipeTimeText: {
    fontSize: 20,
    fontWeight: 400,
  },
  recipeIngredientsContainer: {
    alignSelf: 'flex-start',
    marginVertical: 22,
  },
  recipeIngredientsTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 6,
  },
  ingredientItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ingredientItemCircle: {
    backgroundColor: 'red',
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  ingredientItemText: {
    fontSize: 18,
    marginLeft: 6,
  },
  recipeStepsContainer: {
    alignSelf: 'flex-start',
    marginVertical: 22,
  },
  recipeStepsTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 6,
  },
  recipeStepsName: {
    fontSize: 18,
    marginLeft: 6,
    marginVertical: 6,
  },
});

export default RecipeDetailsScreen;
