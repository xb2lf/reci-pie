/*
 * @Author: {baixiao}
 * @version:
 * @Date: 2025-03-23 13:16:24
 * @LastEditors: {baixiao}
 * @LastEditTime: 2025-03-23 14:16:25
 * @Description:
 */
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='(routes)/welcome/index'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='(routes)/recipe-list/index'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='(routes)/recipe-details/index'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}
