import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "./api/recipeApi";
import { favouriteApi } from "./api/favouriteApi";
import { userApi } from "./api/userApi";
import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    [favouriteApi.reducerPath]: favouriteApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
        recipeApi.middleware,
        favouriteApi.middleware,
        userApi.middleware,
        authApi.middleware,
    );
  },
});