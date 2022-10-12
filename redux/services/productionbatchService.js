import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const productionbatchService = createApi({
  reducerPath: "productionbatchService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/productionBatch",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProductionBatch: builder.query({
      query: (id) => "?id=" + id,
    }),
    saveProductionBatch: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "post",
        body: body,
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const { useGetProductionBatchQuery, useSaveProductionBatchMutation } =
  productionbatchService;
