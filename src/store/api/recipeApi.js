import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipeApi = createApi({
  reducerPath: "recipeApi", 
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/', 
  }),
  endpoints: (builder) => ({
    getRecipeByCategory: builder.query({
      query: (category) => `recipes/category/${category}`, 
    }),
    getRecipeById: builder.query({
      query: (id) => `recipes/${id}`, 
    }),
  }),
});

export const { useGetRecipeByCategoryQuery, useGetRecipeByIdQuery } = recipeApi;