import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const priceService = createApi({
  reducerPath: "priceService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/price",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPriceByProductId: builder.query({
      query: (id) => "?idProduct=" + id,
    }),
  }),
});

//? for usage in functional components as hook
export const { useGetPriceByProductIdQuery } = priceService;
