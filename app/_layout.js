import {Stack} from "expo-router/stack";
import ContextProvider from "../src/context";

export default function Layout() {
  return (
    <ContextProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ContextProvider>
  );
}
