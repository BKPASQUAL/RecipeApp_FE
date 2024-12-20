import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://recipeappbe-production-857f.up.railway.app/",
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => {
        return {
          url: "users/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
