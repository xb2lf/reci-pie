/*
 * @Author: {baixiao}
 * @version:
 * @Date: 2025-03-23 14:35:12
 * @LastEditors: {baixiao}
 * @LastEditTime: 2025-03-23 14:44:59
 * @Description:
 */
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type HeaderProps = {
  headerText: string;
  headrIcon: any;
};

const Header = ({ headerText, headrIcon }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{headerText}</Text>
      <FontAwesome name={headrIcon} size={24} color='#f96163' />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  headerTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
  },
});

export default Header;
