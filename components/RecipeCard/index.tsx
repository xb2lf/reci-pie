/*
 * @Author: {baixiao}
 * @version:
 * @Date: 2025-03-23 15:04:02
 * @LastEditors: {baixiao}
 * @LastEditTime: 2025-03-23 17:51:58
 * @Description:
 */
import { View, FlatList } from 'react-native';
import { recipeList } from '@/constants';
import RecipeItem from '@/components/RecipeItem';
import { recipeItemType } from '@/types';

const RecipeCard = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={recipeList}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }: { item: recipeItemType }) => (
          <RecipeItem item={item} />
        )}
      />
    </View>
  );
};

export default RecipeCard;
