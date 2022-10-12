import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const verificationService = createApi({
  reducerPath: "verificationService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    postEmailDisabled: builder.mutation({
      query: (body) => ({
        url: "/email",
        method: "post",
        body: body,
      }),
    }),
    postSendEmail: builder.mutation({
      query: (body) => ({
        url: "/send_email",
        method: "post",
        body: body,
      }),
    }),
    postChangeEmail: builder.mutation({
      query: (body) => ({
        url: "/change_email",
        method: "post",
        body: body,
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const {
  usePostEmailDisabledMutation,
  usePostSendEmailMutation,
  usePostChangeEmailMutation,
} = verificationService;
