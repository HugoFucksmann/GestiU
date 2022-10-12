import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const productService = createApi({
  reducerPath: "productService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/product",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/",
    }),
    getOneProduct: builder.query({
      query: (id) => "?id=" + id,
    }),
    getStock: builder.query({
      query: (id) => "?productId=" + id,
    }),
    getByCategoryId: builder.query({
      query: (id) => "?categoryId=" + id,
    }),
    saveProduct: builder.mutation({
      query: (product) => ({
        url: "/",
        method: "post",
        body: product,
      }),
    }),
    updateProduct: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "put",
        body: body,
      }),
    }),
    logicalDelete: builder.mutation({
      query: (id) => ({
        url: `/logical-delete/${id}`,
        method: "delete",
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const {
  useGetAllProductsQuery,
  useGetStockQuery,
  useGetOneProductQuery,
  useGetByCategoryIdQuery,
  useSaveProductMutation,
  useUpdateProductMutation,
  useLogicalDeleteMutation,
} = productService;
