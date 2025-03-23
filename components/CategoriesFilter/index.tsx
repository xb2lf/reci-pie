/*
 * @Author: {baixiao}
 * @version:
 * @Date: 2025-03-23 15:03:30
 * @LastEditors: {baixiao}
 * @LastEditTime: 2025-03-23 15:27:06
 * @Description:
 */
import { categories, colors } from '@/constants';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const CategoriesFilter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={item.id || index.toString()}
            onPress={() => setActiveIndex(index)}
          >
            <View
              style={[
                styles.categoryItemContainer,
                {
                  backgroundColor:
                    index === activeIndex
                      ? colors.COLOR_PRIMARY
                      : colors.COLOR_LIGHT,
                },
              ]}
            >
              <Text
                style={[
                  styles.ctegoryItemName,
                  {
                    color:
                      index === activeIndex
                        ? colors.COLOR_LIGHT
                        : colors.COLOR_DARK,
                  },
                ]}
              >
                {item.category}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemContainer: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 36,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  ctegoryItemName: {
    fontSize: 18,
  },
});

export default CategoriesFilter;
