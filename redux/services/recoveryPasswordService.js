import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const recoveryPasswordService = createApi({
  reducerPath: "recoveryPasswordService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendNumber: builder.query({
      query: (id) => "resetPassword?code=" + id,
    }),
    //! Chequear
    sendMail: builder.mutation({
      query: ({ email, ...body }) => ({
        url: "/resetPassword?email=" + email,
        method: "post",
        body: body,
      }),
    }),
    sendCode: builder.mutation({
      query: (body) => ({
        url: "/resetPassword/change",
        method: "post",
        body: body,
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const { useSendNumberQuery, useSendMailMutation, useSendCodeMutation } =
  recoveryPasswordService;
