import { CryptoInfo } from "@/infrastructure/model/cryptoData";
import { CurrencyStore } from "@/infrastructure/model/cryptoStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/**
 * Currency store manages global state for cryptocurrency watchlist and theme preferences.
 * 
 * @description Creates a persistent Zustand store with methods to manage cryptocurrencies and app theme
 * 
 * @function currencyStore
 * @returns {CurrencyStore} A store with watchlist and theme-related state and actions
 * 
 * @example
 * // Add a cryptocurrency to the watchlist
 * const { addCurrency } = currencyStore();
 * addCurrency(bitcoinData);
 * 
 * @remarks
 * - Uses Zustand for state management
 * - Persists state using AsyncStorage
 * - Provides methods to add/remove cryptocurrencies
 * - Supports theme toggling
 */
export const currencyStore = create<CurrencyStore>()(
  persist(
    (set) => ({
      isToggleTheme: false,
      theme: "light",
      watchlist: [],

      /**
       * Adds a cryptocurrency to the user's watchlist.
       * 
       * @param {CryptoInfo} currency - The cryptocurrency to add to the watchlist
       * @returns {void}
       */
      addCurrency: (currency: CryptoInfo) =>
        set((state) => ({ watchlist: [...state.watchlist, currency] })),

      /**
       * Removes a cryptocurrency from the user's watchlist.
       * 
       * @param {string} currencyId - The unique identifier of the cryptocurrency to remove
       * @returns {void}
       */
      removeCurrency: (currencyId: string) =>
        set((state) => ({
          watchlist: state.watchlist.filter((item) => item.id !== currencyId),
        })),

      /**
       * Toggles the application theme between light and dark modes.
       * 
       * @returns {void}
       */
      toggleTheme: () =>
        set((state) => ({
          isToggleTheme: !state.isToggleTheme,
        })),
    }),
    {
      name: "currency-store",
      partialize: (state) => ({
        watchlist: state.watchlist,
        theme: state.theme,
        isToogleTheme: state.isToggleTheme,
      }),
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
