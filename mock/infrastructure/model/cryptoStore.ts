import { CryptoInfo } from "./cryptoData";

export interface CurrencyStore {
  isToggleTheme: boolean;
  theme: "light" | "dark";
  watchlist: CryptoInfo[];
  addCurrency: (currency: CryptoInfo) => void;
  removeCurrency: (currencyId: string) => void;
  toggleTheme: () => void;
}
