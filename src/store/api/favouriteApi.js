import { api } from "./api";

export const favouriteApi = api.injectEndpoints({
  reducerPath: "favouriteApi",
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