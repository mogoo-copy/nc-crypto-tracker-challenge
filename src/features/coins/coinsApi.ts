import cpdbApi from "../../api/cpdbApi";

const NICO_URL = "https://ohlcv-api.nomadcoders.workers.dev?coinId=";

const coinsApi = cpdbApi.injectEndpoints({
  endpoints: (builder) => ({}),
});

export const {} = coinsApi;
