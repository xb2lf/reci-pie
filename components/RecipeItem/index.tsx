/*
 * @Author: {baixiao}
 * @version:
 * @Date: 2025-03-23 15:30:51
 * @LastEditors: {baixiao}
 * @LastEditTime: 2025-03-23 16:18:58
 * @Description:
 */
import { colors } from '@/constants';
import { recipeItemType } from '@/types';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type RecipeItemProps = {
  item: recipeItemType;
};

const RecipeItem = ({ item }: RecipeItemProps) => {
  const router = useRouter();
  return (
    <Pressable
      style={styles.recipeItemContainer}
      onPress={() =>
        router.push({
          pathname: '/(routes)/recipe-details',
          params: { id: item.id },
        })
      }
    >
      <Image
        source={item.image}
        style={styles.recipeItemImage}
        contentFit='contain'
      />
      <Text>{item.name}</Text>
      <View style={styles.recipeItemInfo}>
        <Text>{item.time}</Text>
        <Text>{' | '}</Text>
        <View style={styles.itemRatingContainer}>
          <Text style={styles.itemRatingText}>{item.rating}</Text>
          <FontAwesome name='star' size={16} color={colors.COLOR_PRIMARY} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  recipeItemContainer: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 26,
  },
  recipeItemImage: {
    width: 150,
    height: 150,
    resizeMode: 'center',
  },
  recipeItemInfo: {
    flexDirection: 'row',
    marginTop: 8,
  },
  itemRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRatingText: {
    marginRight: 4,
  },
});

export default RecipeItem;
