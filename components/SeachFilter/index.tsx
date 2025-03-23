/*
 * @Author: {baixiao}
 * @version:
 * @Date: 2025-03-23 14:46:34
 * @LastEditors: {baixiao}
 * @LastEditTime: 2025-03-23 14:56:47
 * @Description:
 */
import { View, TextInput, TextInputProps, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type SeachFilterProps = {
  icon: any;
} & TextInputProps;

const SeachFilter = ({
  icon,
  placeholder,
  ...textInputProps
}: SeachFilterProps) => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome name={icon} size={20} color='#f96163' />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  searchInput: {
    paddingLeft: 8,
    fontSize: 16,
    color: '#808080',
  },
});

export default SeachFilter;
