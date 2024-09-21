import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  return (
  <SafeAreaProvider>
  <StatusBar style={'light'} backgroundColor='black' />
    <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  </SafeAreaProvider>
  )
}

export default RootLayout