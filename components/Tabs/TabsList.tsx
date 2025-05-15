import { currencyStore } from "@/store/currencyStore";
import HomePage from "@/view/HomePage";
import WatchListPage from "@/view/WatchListPage";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

/**
 * TabsList component provides a tabbed navigation interface for cryptocurrency pages.
 * 
 * @component
 * @description Renders a tab view with Coins and Watchlist pages using react-native-tab-route
 * 
 * @returns {React.JSX.Element} A tabbed navigation component with dynamic theming
 * 
 * @example
 * // Renders tabs for Coins and Watchlist pages
 * <TabsList />
 * 
 * @remarks
 * - Supports dynamic theme switching based on user preferences
 * - Uses react-native-tab-route for tab navigation
 * - Adapts to different screen sizes using useWindowDimensions
 * - Provides seamless navigation between Coins and Watchlist pages
 */
const TabsList = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "coins", title: "Coins" },
    { key: "watchlist", title: "Watchlist" },
  ]);

  const { isToggleTheme } = currencyStore();

  const renderScene = SceneMap({
    coins: HomePage,
    watchlist: WatchListPage,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: isToggleTheme ? "#ffffff" : "#677edc",
            height: 4,
          }}
          style={{
            backgroundColor: isToggleTheme ? "#000000" : "#ffffff",
            height: 40,
            elevation: 0,
            shadowColor: "#000000",
            shadowOpacity: 0.1,
          }}
          activeColor="#67dc93"
          inactiveColor="#0ea5e9"
          tabStyle={{ borderRadius: 2 }}
        />
      )}
    />
  );
};

export default TabsList;

