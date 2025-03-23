/*
 * @Author: {baixiao}
 * @version:
 * @Date: 2025-03-23 14:15:17
 * @LastEditors: {baixiao}
 * @LastEditTime: 2025-03-23 16:21:22
 * @Description:
 */
import { View, Text, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import SeachFilter from '@/components/SeachFilter';
import CategoriesFilter from '@/components/CategoriesFilter';
import RecipeCard from '@/components/RecipeCard';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RecipeListScreen = () => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS === 'ios' ? 0 : hp(1) },
      ]}
    >
      {/* render header */}
      <Header headerText='Hi, Jhon' headrIcon='bell-o' />
      {/* Search Filter */}
      <SeachFilter icon='search' placeholder='enter your fav recipe' />
      {/* Categories filter */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Categories</Text>
        {/* Categories list */}
        <CategoriesFilter />
      </View>
      {/* Recipe List Filter */}
      <View style={styles.recipeContainer}>
        <Text style={styles.categoryTitle}>Recipes</Text>
        {/* Recipes list */}
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  categoryContainer: {
    marginTop: 22,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  recipeContainer: {
    flex: 1,
    marginTop: 22,
  },
});

export default RecipeListScreen;
