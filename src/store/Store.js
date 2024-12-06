import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "./api/recipeApi";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
        recipeApi.middleware,
    );
  },
});