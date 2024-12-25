import { UserProvider } from "@/context";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <UserProvider>
    <Stack
    screenOptions={{headerShown:false}}
   >
    <Stack.Screen name="Home" />
    <Stack.Screen name="(tabs)"  />
    <Stack.Screen name="DetailScreen"  />


  </Stack>
  </UserProvider>
  );
}
