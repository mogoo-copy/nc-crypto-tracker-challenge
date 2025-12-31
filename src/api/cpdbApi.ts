import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://api.coinpaprika.com/v1";

const cpdbApi = createApi({
  reducerPath: "cpdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Coin"],
  endpoints: () => ({}),
});

export default cpdbApi;
