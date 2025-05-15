import CardComponent from "@/components/ui/Card";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Switch } from "@/components/ui/switch";
import { Colors } from "@/infrastructure/constants/Colors";
import { useThemeColor } from "@/infrastructure/hooks/useThemeColor";
import { currencyStore } from "@/store/currencyStore";
import { Text, View } from "react-native";

/**
 * UserPage component displays user information and application settings.
 * 
 * @component
 * @description Renders a card with user details and theme configuration
 * 
 * @returns {React.JSX.Element} A card view with user information and theme toggle
 * 
 * @example
 * // Renders the user page with personal information and theme switch
 * <UserPage />
 * 
 * @remarks
 * - Displays static user information
 * - Provides a theme toggle switch
 * - Uses dynamic text color based on current theme
 */
export default function UserPage() {
  const { toggleTheme, isToggleTheme } = currencyStore();

  const textColor = useThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text",
  );

  return (
    <CardComponent className="flex flex-col justify-center">
      <View className="flex flex-col">
        <Heading size="md">User Information</Heading>
        <Text style={{ color: textColor }} className="text-lg">
          Username:
        </Text>
        <Text style={{ color: textColor }}>Alexis Buelvas</Text>
        <Text style={{ color: textColor }} className="text-lg">
          Email:
        </Text>
        <Text style={{ color: textColor }}>alexis.buelvas@gmail.com</Text>
        <Text style={{ color: textColor }} className="text-lg">
          Country:
        </Text>
        <Text style={{ color: textColor }}>Colombia</Text>
      </View>
      <Divider className="my-2" />
      <View className="flex flex-col justify-center my-4">
        <Heading size="md">Configurations</Heading>
        <View className="flex flex-row items-center">
          <Text style={{ color: textColor }} className="text-lg">
            Theme:
          </Text>
          <Switch onToggle={toggleTheme} value={isToggleTheme} />
        </View>
      </View>
    </CardComponent>
  );
}
