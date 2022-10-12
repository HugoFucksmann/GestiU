import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/user",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      console.log("TOKEN ", token);
      if (token) headers.set("authorization", token);
      headers.set("content-type", "multipart/form-data");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (name) => "/",
    }),
    existUser: builder.query({
      query: (name) => `/username?username=${name}`,
    }),
    existEmail: builder.query({
      query: (emial) => `/email?email=${emial}`,
    }),
    saveUser: builder.mutation({
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
  useGetAllUserQuery,
  useExistUserQuery,
  useExistEmailQuery,
  useSaveUserMutation,
} = userService;
