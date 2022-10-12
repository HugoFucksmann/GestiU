import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      console.log("HEADERS Login", headers.keys());
      return headers;
    },
  }),
  endpoints: (builder) => ({
    isAuth: builder.query({
      query: () => "/auth",
    }),
    postAuth: builder.mutation({
      query: (body) => ({
        url: "/auth",
        method: "post",
        body: body,
      }),
    }),
  }),
});

// for usage in functional components as hook
export const { usePostAuthMutation, useIsAuthQuery } = authService;
