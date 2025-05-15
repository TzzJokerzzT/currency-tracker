import { CoinloreData, CryptoData, CryptoInfo } from "../model/cryptoData";

/**
 * Adapts raw Coinlore cryptocurrency data to a simplified CryptoData format.
 * 
 * @function adaptCryptoData
 * @description Transforms raw cryptocurrency data into a standardized, lightweight format
 * 
 * @param {CoinloreData[]} data - Raw cryptocurrency data from Coinlore API
 * @returns {CryptoData[]} Transformed cryptocurrency data with essential information
 * 
 * @example
 * // Convert raw Coinlore data to a simplified format
 * const simplifiedData = adaptCryptoData(coinloreApiResponse);
 * 
 * @remarks
 * - Extracts key information like ID, name, symbol, rank, and price
 * - Used for creating concise cryptocurrency listings
 */
export const adaptCryptoData = (data: CoinloreData[]): CryptoData[] => {
  return data.map((index) => ({
    id: index.id,
    name: index.name,
    symbol: index.symbol,
    rank: index.rank,
    current_price: index.price_usd,
  }));
};

/**
 * Adapts raw Coinlore cryptocurrency data to a comprehensive CryptoInfo format.
 * 
 * @function adaptCryptoDataById
 * @description Transforms raw cryptocurrency data into a detailed format with extensive information
 * 
 * @param {CoinloreData[]} data - Raw cryptocurrency data from Coinlore API
 * @returns {CryptoInfo[]} Transformed cryptocurrency data with comprehensive details
 * 
 * @example
 * // Convert raw Coinlore data to a detailed cryptocurrency information format
 * const detailedCryptoData = adaptCryptoDataById(coinloreApiResponse);
 * 
 * @remarks
 * - Includes additional details like price changes, market cap, volume
 * - Used for displaying detailed cryptocurrency information
 * - Supports in-depth cryptocurrency analysis and tracking
 */
export const adaptCryptoDataById = (data: CoinloreData[]): CryptoInfo[] => {
  return data.map((index) => ({
    id: index.id,
    name: index.name,
    symbol: index.symbol,
    current_price: index.price_usd,
    percent_change_24h: index.percent_change_24h,
    percent_change_1h: index.percent_change_1h,
    percent_change_7d: index.percent_change_7d,
    market_cap_usd: index.market_cap_usd,
    volume24: index.volume24,
    volume24_native: index.volume24_native,
    csupply: index.csupply,
    price_btc: index.price_btc,
  }));
};
