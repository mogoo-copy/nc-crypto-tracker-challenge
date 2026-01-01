import cpdbApi from "../../api/cpdbApi";
import type { BasicCoin, CoinTickers, DetailCoin } from "./types";

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
  }),
});

export const { useGetCoinsQuery, useGetCoinInfoQuery, useGetCoinTickersQuery } = coinsApi;
