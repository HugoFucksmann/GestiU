import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const stockTypeService = createApi({
  reducerPath: "stockTypeService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/stockType",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllStockType: builder.query({
      query: () => "/",
    }),
    getOneStockType: builder.query({
      query: (name) => "?id=" + name,
    }),
  }),
});

//? for usage in functional components as hook
export const { useGetAllStockTypeQuery, useGetOneStockTypeQuery } =
  stockTypeService;
