import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

//! revisar: todos post
export const cashRegisterService = createApi({
  reducerPath: "cashRegisterService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/cash",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    openCash: builder.mutation({
      query: (body) => ({
        url: "/open",
        method: "post",
        body: body,
      }),
    }),
    closeCash: builder.mutation({
      query: (body) => ({
        url: "/close",
        method: "post",
        body: body,
      }),
    }),
    getById: builder.mutation({
      query: (id) => ({
        url: "/get",
        method: "post",
        body: id,
      }),
    }),

    getOpen: builder.mutation({
      query: () => ({
        url: "/getOpen",
        method: "post",
      }),
    }),
    getAllClose: builder.mutation({
      query: () => ({
        url: "/getClosed",
        method: "post",
      }),
    }),
    addEgress: builder.mutation({
      query: (body) => ({
        url: "/egress",
        method: "post",
        body: body,
      }),
    }),
    addEntry: builder.mutation({
      query: (body) => ({
        url: "/entry",
        method: "post",
        body: body,
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const {
  useOpenCashMutation,
  useCloseCashMutation,
  useGetByIdMutation,
  useGetOpenMutation,
  useGetAllCloseMutation,
  useAddEgressMutation,
  useAddEntryMutation,
} = cashRegisterService;
