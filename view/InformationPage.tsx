import { Button, ButtonText } from "@/components/ui/button";
import CardComponent from "@/components/ui/Card";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Colors } from "@/infrastructure/constants/Colors";
import { adaptCryptoDataById } from "@/infrastructure/adapters/cryptoAdapter";
import { useCryptoData } from "@/infrastructure/hooks/useCryptoData";
import { useThemeColor } from "@/infrastructure/hooks/useThemeColor";
import { formatCurrency } from "@/infrastructure/utils/FormatCurrency";
import { currencyStore } from "@/store/currencyStore";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { InformationPageProps } from "@/infrastructure/model/components";

/**
 * InformationPage component displays detailed information about a specific cryptocurrency.
 * 
 * @component
 * @description Renders comprehensive details of a cryptocurrency based on its ID
 * 
 * @param {InformationPageProps} props - The properties passed to the component
 * @param {string} props.cryptoId - Unique identifier of the cryptocurrency to display
 * 
 * @returns {React.JSX.Element} A view with cryptocurrency details or loading/error states
 * 
 * @example
 * // Renders detailed information for a specific cryptocurrency
 * <InformationPage cryptoId="bitcoin" />
 * 
 * @remarks
 * - Fetches cryptocurrency data using a custom hook
 * - Supports real-time data updates via periodic refetching
 * - Handles loading and error states
 * - Allows adding/removing cryptocurrency from watchlist
 */
export default function InformationPage({ cryptoId }: InformationPageProps) {
  const { data, isLoading, error, refetch } = useCryptoData();
  const { addCurrency, removeCurrency, watchlist } = currencyStore();
  const cryptoData = adaptCryptoDataById(data?.data || []);
  const crypto = cryptoData?.find((item) => item.id === cryptoId);

  const textColor = useThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text",
  );

  /**
   * Sets up an interval to periodically refetch cryptocurrency data.
   * 
   * @description Automatically updates cryptocurrency information every 20 seconds
   * @fires refetch - Triggers data refetching at regular intervals
   * 
   * @returns {Function} Cleanup function to clear the interval when component unmounts
   */
  useEffect(() => {
    // Create an interval to periodically refresh cryptocurrency data
    const interval = setInterval(() => {
      refetch(); // Fetch the latest cryptocurrency data
    }, 20000); // Refresh every 20 seconds

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [cryptoId, refetch]);

  // Render loading state while fetching cryptocurrency data
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        {/* Display a large activity indicator to show data is loading */}
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Render error state if data fetching fails or no cryptocurrency is found
  if (error || !crypto) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-500 font-bold">
          {/* Display an error message when cryptocurrency data cannot be loaded */}
          Can&apos;t load information of this coin
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4">
      <CardComponent>
        <Heading size="md" bold>
          <Text style={{ color: textColor }} className="text-2xl font-bold">
            {crypto.name}
          </Text>
        </Heading>
        <Text style={{ color: textColor }} className="text-lg">
          {crypto.symbol.toUpperCase()}
        </Text>
        <Text style={{ color: textColor }} className="text-lg mt-2">
          USD price: ${formatCurrency(crypto.current_price)}
        </Text>
        <Text style={{ color: textColor }} className="text-lg mt-2">
          Change 1h: {crypto.percent_change_1h}%
        </Text>
        <Text style={{ color: textColor }} className="text-lg mt-2">
          Change 24h: {crypto.percent_change_24h}%
        </Text>
        <Text style={{ color: textColor }} className="text-lg mt-2">
          Change 7d: {crypto.percent_change_7d}%
        </Text>
        <Text style={{ color: textColor }} className="text-lg mt-2">
          Market cap: {formatCurrency(crypto.market_cap_usd)}
        </Text>
        <Text style={{ color: textColor }} className="text-lg mt-2">
          Supply: {formatCurrency(crypto.csupply)}
        </Text>
        <Text style={{ color: textColor }} className="text-lg mt-2">
          Volume 24h: {formatCurrency(crypto.volume24)}
        </Text>
        <Text style={{ color: textColor }} className="text-lg mt-2">
          BTC price: {formatCurrency(crypto.price_btc)}
        </Text>
        <Divider className="my-0.5" />
        <Button
          onPress={() => {
            if (watchlist.some((item) => item.id === crypto.id)) {
              removeCurrency(crypto.id);
            } else {
              addCurrency(crypto);
            }
          }}
          variant="solid"
        >
          <ButtonText>
            {watchlist.some((item) => item.id === crypto.id)
              ? "Remove from watchlist"
              : "Add to watchlist"}
          </ButtonText>
        </Button>
      </CardComponent>
    </View>
  );
}
