import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const categoryService = createApi({
  reducerPath: "categoryService",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "/category",
    prepareHeaders: async (headers, { getState }) => {
      const token = await AsyncStorage.getItem("token");
      if (token) headers.set("authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => "/",
    }),
    saveCategory: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "post",
        body: body,
      }),
    }),
    uploadImgCategory: builder.mutation({
      query: (image) => ({
        url: "/",
        method: "post",
        body: image,
      }),
    }),
    uploadNameCategory: builder.mutation({
      query: (name) => ({
        url: "/",
        method: "put",
        body: name,
      }),
    }),
    updateCategory: builder.mutation({
      query: (category) => ({
        url: "/",
        method: "put",
        body: category,
      }),
    }),
    logicalDeleteCategory: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "delete",
      }),
    }),
  }),
});

//? for usage in functional components as hook
export const {
  useGetAllCategoryQuery,
  useSaveCategoryMutation,
  useUploadImgCategoryMutation,
  useUploadNameCategoryMutation,
  useUpdateCategoryMutation,
  useLogicalDeleteCategoryMutation,
} = categoryService;
