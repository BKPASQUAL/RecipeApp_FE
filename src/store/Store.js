import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "./api/recipeApi";
import { favouriteApi } from "./api/favouriteApi";
import { userApi } from "./api/userApi";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    [favouriteApi.reducerPath]: favouriteApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
        recipeApi.middleware,
        favouriteApi.middleware,
        userApi.middleware,
    );
  },
});