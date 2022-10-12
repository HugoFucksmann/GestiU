import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const providerService = createApi({
  reducerPath: "providerService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/provider",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllProvider: build.query({
      query: () => "/",
    }),
    getOneProvider: build.query({
      query: (id) => "?id=" + id,
    }),
    saveProvider: build.mutation({
      query: (body) => ({
        url: "/",
        method: "post",
        body: body,
      }),
    }),
    deleteProvider: build.mutation({
      query: (providerId) => ({
        url: "/" + providerId,
        method: "delete",
      }),
    }),
    updateProvider: build.mutation({
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
  useGetAllProviderQuery,
  useGetOneProviderQuery,
  useSaveProviderMutation,
  useDeleteProviderMutation,
  useUpdateProviderMutation,
} = providerService;
