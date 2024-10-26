import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParam = {
  Home: undefined;
  About: undefined;
};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParam,
  "About" | "Home"
>;
