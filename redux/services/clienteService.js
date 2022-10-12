import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const clienteService = createApi({
  reducerPath: "clienteService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/client",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllClientes: builder.query({
      query: () => "/",
    }),
    getOneCliente: builder.query({
      query: (id) => "?id=" + id,
    }),
    saveCliente: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "post",
        body: body,
      }),
    }),
    updateCliente: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "put",
        body: body,
      }),
    }),
    deletecliente: builder.mutation({
      query: (id) => ({
        url: "/" + id,
        method: "delete",
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const {
  useGetAllClientesQuery,
  useGetOneClienteQuery,
  useSaveClienteMutation,
  useDeleteclienteMutation,
  useUpdateClienteMutation,
} = clienteService;
