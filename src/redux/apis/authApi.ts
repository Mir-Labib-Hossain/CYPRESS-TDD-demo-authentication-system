import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "../../../cypress/fixtures",
  }),
  endpoints: (builder) => ({
    //  using 'mutation' for post request
    loginUser: builder.mutation({
      query: (body: { username: string; password: string }) => {
        return {
          url: "/loginResponse.json",
          method: "POST",  
          body,
          mode: "no-cors",
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
