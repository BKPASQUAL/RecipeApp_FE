import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "./api/recipeApi";
import { favouriteApi } from "./api/favouriteApi";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    [favouriteApi.reducerPath]: favouriteApi.reducer,
    
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
        recipeApi.middleware,
        favouriteApi.middleware,
    );
  },
});