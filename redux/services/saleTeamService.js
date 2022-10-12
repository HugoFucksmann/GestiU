import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saleTeamService = createApi({
  reducerPath: "saleTeamService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/sales-team",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSaleTeam: builder.query({
      query: (id) => "?code=" + id,
    }),
  }),
});

//? for usage in functional components as hook
export const { useGetSaleTeamQuery } = saleTeamService;
