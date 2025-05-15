import { currencyStore } from "@/store/currencyStore";
import TableComponent from "../components/Table/Table";

/**
 * WatchListPage component displays a list of cryptocurrencies added to the user's watchlist.
 * 
 * @component
 * @description Renders a table of cryptocurrencies that the user has selected to monitor
 * 
 * @returns {React.JSX.Element} A table view of cryptocurrencies in the user's watchlist
 * 
 * @example
 * // Renders a table of watched cryptocurrencies
 * <WatchListPage />
 * 
 * @remarks
 * - Uses the currencyStore to retrieve the watchlist
 * - Displays cryptocurrency ID, Name, and Price
 * - Utilizes a reusable TableComponent for rendering
 */
export default function WatchListPage() {
  const { watchlist } = currencyStore();

  return <TableComponent array={["ID", "Name", "Price"]} data={watchlist} />;
}

