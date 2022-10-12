import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const taxPayerService = createApi({
  reducerPath: "taxPayerService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/tax-payer",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTaxPayer: builder.query({
      query: (name) => "/",
    }),
  }),
});

//? for usage in functional components as hook
export const { useGetAllTaxPayerQuery } = taxPayerService;
