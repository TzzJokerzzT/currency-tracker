import { cryptoApi } from '@/infrastructure/api/cryptoApi';
import { useQuery } from '@tanstack/react-query';
import { CoinloreResponse } from '../model/cryptoData';

/**
 * Custom hook to fetch and manage cryptocurrency data using TanStack Query.
 * 
 * @function useCryptoData
 * @description Provides a reactive and efficient way to fetch cryptocurrency data
 * 
 * @returns {UseQueryResult<CoinloreResponse>} An object containing cryptocurrency data, loading state, and error handling
 * 
 * @example
 * // Use the hook in a component to fetch and display cryptocurrency data
 * const { data, isLoading, error } = useCryptoData();
 * 
 * @remarks
 * - Utilizes TanStack Query for efficient data fetching and caching
 * - Automatically manages data staleness and refetching
 * - Provides loading and error states for seamless UI updates
 * - Refreshes data every 20 seconds
 * - Considers data stale after 30 seconds
 */
export function useCryptoData() {
  return useQuery<CoinloreResponse>({
    queryKey: ['crypto'],
    queryFn: cryptoApi,
    staleTime: 1000 * 30,
    refetchInterval: 1000 * 20
  });
}