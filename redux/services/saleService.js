import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saleService = createApi({
  reducerPath: "saleService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/sale",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSales: builder.query({
      query: (name) => "/",
    }),
    getSale: builder.query({
      query: (name) => "?id=" + name,
    }),
    saveSale: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "post",
        body: body,
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const { useGetSaleQuery, useGetSalesQuery, useSaveSaleMutation } =
  saleService;
