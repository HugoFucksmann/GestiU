import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeService = createApi({
  reducerPath: "storeService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/store",
    prepareHeaders: async (headers, { getState }) => {
      let token = "Bearer " + getState().auth.token;
      if (token) headers.set("authorization", token);
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getStore: builder.query({
      query: (name) => "/",
    }),
    getStatus: builder.query({
      query: (name) => "/status",
    }),
    uploadImg: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "post",
        body: body,
      }),
    }),
    saveStore: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "put",
        body: body,
      }),
    }),
    updateName: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "put",
        body: body,
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const {
  useGetStoreQuery,
  useGetStatusQuery,
  useUploadImgMutation,
  useSaveStoreMutation,
  useUpdateNameMutation,
} = storeService;
