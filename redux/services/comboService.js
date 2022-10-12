import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const comboService = createApi({
  reducerPath: "comboService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/combo",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllCombo: builder.query({
      query: () => "/",
    }),
    getOneCombo: builder.query({
      query: (id) => "?id=" + id,
    }),
    saveCombo: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "post",
        body: body,
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const {
  useGetAllComboQuery,
  useGetOneComboQuery,
  useSaveComboMutation,
} = comboService;
