import { baseUrl } from "@/infrastructure/utils/apiURL";
import axios from "axios";
import { CoinloreResponse } from "../model/cryptoData";


export const cryptoApi = async () => {
  try {
    const response = await axios.get<CoinloreResponse>(`${baseUrl}`);
    if (!response.data.data) {
      throw new Error('API response is not in the expected format');
    }
    return response.data } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
};