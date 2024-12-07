import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => {
        return {
          url: "users/register",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useAddUserMutation } = userApi;
