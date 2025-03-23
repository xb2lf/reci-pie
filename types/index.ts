/*
 * @Author: {baixiao}
 * @version:
 * @Date: 2025-03-23 15:08:10
 * @LastEditors: {baixiao}
 * @LastEditTime: 2025-03-23 15:10:38
 * @Description:
 */
import { ImageSource } from 'expo-image';

export type categoryItemType = {
  id: string;
  category: string;
};

export type recipeItemType = {
  id: string;
  name: string;
  image: string | ImageSource;
  rating: string;
  ingredients: string[];
  time: string;
  difficulty: string;
  calories: string;
  color?: string;
  description: string;
  steps: string[];
};
