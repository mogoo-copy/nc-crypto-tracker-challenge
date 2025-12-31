import cpdbApi from "../../api/cpdbApi";
import type { Coin } from "./types";

const NICO_URL = "https://ohlcv-api.nomadcoders.workers.dev?coinId=";

const coinsApi = cpdbApi.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], void>({
      query: () => "coins",
      transformResponse: (response: Coin[]) => {
        if (!response || !Array.isArray(response)) {
          return [];
        }
        return response.slice(0, 30);
      },
      providesTags: ["Coin"],
    }),
  }),
});

export const { useGetCoinsQuery } = coinsApi;
