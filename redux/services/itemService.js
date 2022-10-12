import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const itemService = createApi({
  reducerPath: "itemService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/item",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => "/",
    }),
  }),
});

//? for usage in functional components as hook
export const { useGetAllItemsQuery } = itemService;
