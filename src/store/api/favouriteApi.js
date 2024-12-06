import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favouriteApi = createApi({
  reducerPath: "favouriteApi", 
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/', 
  }),
  endpoints: (builder) => ({
    getFavouriteRecipes: builder.query({
      query: () => "favourites",
    }),

    addFavouriteRecipe: builder.mutation({
      query: (recipeData) => ({
        url: "favourites",
        method: "POST",
        body: recipeData,
      }),
    }),

    removeFavouriteRecipe: builder.mutation({
      query: (recipeId) => ({
        url: `favourites/${recipeId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetFavouriteRecipesQuery,
  useAddFavouriteRecipeMutation,
  useRemoveFavouriteRecipeMutation,
} = favouriteApi;