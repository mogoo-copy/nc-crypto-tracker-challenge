import cpdbApi from "../../api/cpdbApi";
import type { BasicCoin, CoinHistory, CoinTickers, DetailCoin } from "./types";

const NICO_URL = "https://ohlcv-api.nomadcoders.workers.dev?coinId=";

const coinsApi = cpdbApi.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query<BasicCoin[], void>({
      query: () => "coins",
      transformResponse: (response: BasicCoin[]) => {
        if (!response || !Array.isArray(response)) {
          return [];
        }
        return response.slice(0, 30);
      },
      providesTags: ["Coin"],
    }),
    getCoinInfo: builder.query<DetailCoin, string>({
      query: (coinId) => `coins/${coinId}`,
    }),
    getCoinTickers: builder.query<CoinTickers, string>({
      query: (coinId) => `tickers/${coinId}`,
    }),
    getCoinHistory: builder.query<CoinHistory[], string>({
      queryFn: async (coinId) => {
        try {
          const response = await fetch(`${NICO_URL}${coinId}`);

          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }

          const data = await response.json();

          return { data };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Unknown error";
          return { error: { status: 500, data: errorMessage } };
        }
      },
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinInfoQuery,
  useGetCoinTickersQuery,
  useGetCoinHistoryQuery,
} = coinsApi;
