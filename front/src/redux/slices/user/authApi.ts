import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { LoginCredentials, LoginResponse } from "redux/slices/user/Models";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_DEV,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query(credentials) {
        return {
          url: `/login`,
          method: "POST",
          body: credentials,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
