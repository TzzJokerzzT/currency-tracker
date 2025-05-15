import TableComponent from "@/components/Table/Table";
import { adaptCryptoData } from "@/infrastructure/adapters/cryptoAdapter";
import { useCryptoData } from "@/infrastructure/hooks/useCryptoData";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

/**
 * HomePage component displays a list of cryptocurrency data in a scrollable table.
 * 
 * @component
 * @description Fetches and renders cryptocurrency information using a custom hook and adapter.
 * 
 * @returns {React.JSX.Element} A scrollable view with a table of cryptocurrency data or loading/error states.
 * 
 * @example
 * // Renders a table of cryptocurrencies with rank, name, and current price
 * <HomePage />
 * 
 * @remarks
 * - Uses useCryptoData hook to fetch cryptocurrency data
 * - Displays a loading indicator while data is being fetched
 * - Shows an error message if data fetching fails
 * - Adapts raw data using cryptoAdapter before rendering
 */
const HomePage = () => {
  const { data, isLoading, error } = useCryptoData();
  const cryptoData = adaptCryptoData(data?.data || []);
  const tableTitle = ["Rank", "Name", "Current Price"];
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="font-bold text-red-500">Error fetching data</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1">
      <TableComponent array={tableTitle} data={cryptoData} />
    </ScrollView>
  );
};

export default HomePage;
