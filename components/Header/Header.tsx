import { currencyStore } from "@/store/currencyStore";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import AvatarComponent from "../ui/Avatar";

/**
 * Header component provides a top navigation bar for the cryptocurrency application.
 * 
 * @component
 * @description Renders a responsive header with dynamic theming and navigation
 * 
 * @returns {React.JSX.Element} A header view with Markets title and user avatar
 * 
 * @example
 * // Renders the application header
 * <Header />
 * 
 * @remarks
 * - Supports dynamic theme switching (light/dark mode)
 * - Displays 'Markets' title
 * - Provides a pressable avatar for user navigation
 * - Includes subtle shadow for visual depth
 * - Adapts text and background colors based on current theme
 */
const Header = () => {
  const { isToggleTheme } = currencyStore();

  return (
    <View
      className={`flex flex-row justify-between items-center p-4 ${isToggleTheme ? "bg-black" : "bg-white"}`}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
      }}
    >
      <Text
        className={`text-2xl font-bold ${isToggleTheme ? "text-white" : "text-black"}`}
      >
        Markets
      </Text>
      <Pressable
        onPress={() => {
          router.push("/User");
        }}
      >
        <View className="flex flex-row items-center">
          <AvatarComponent />
        </View>
      </Pressable>
    </View>
  );
};

export default Header;
