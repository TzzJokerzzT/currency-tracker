export interface CryptoData {
  id: string;
  name: string;
  rank: number;
  symbol: string;
  current_price: number;
}

export interface CryptoInfo {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  percent_change_24h: number;
  percent_change_1h: number;
  percent_change_7d: number;
  market_cap_usd: number;
  volume24: number;
  volume24_native: number;
  csupply: number;
  price_btc: number;
}

export type CoinloreData = {
  id: string;
  name: string;
  rank: number;
  symbol: string;
  price_usd: number;
  percent_change_24h: number;
  percent_change_1h: number;
  percent_change_7d: number;
  market_cap_usd: number;
  volume24: number;
  volume24_native: number;
  csupply: number;
  price_btc: number;
  tsupply: number;
  msupply: number;
};

export type CoinloreResponse = {
  data: CoinloreData[];
  info: Record<string, unknown>;
};

