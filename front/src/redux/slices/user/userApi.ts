import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RegisterCredentials } from "redux/slices/user/Models";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_DEV,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    register: builder.mutation<void, RegisterCredentials>({
      query(credentials) {
        return {
          url: `/users`,
          method: "POST",
          body: credentials,
        };
      },
    }),
  }),
});

export const { useRegisterMutation } = userApi;
