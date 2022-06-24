import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface User {
  id: string;
  email: string;
  username: string;
  name: string | null;
  surname: string | null;
  age: number | null;
  public: boolean;
  image: string | null;
}

export const chatRoomsApi = createApi({
  reducerPath: "chatRoomsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_DEV,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["ChatRooms"],
  endpoints: (builder) => ({
    getRooms: builder.query<User[], void>({
      query: () => `friendship`,
    }),
  }),
});

export const { useGetRoomsQuery } = chatRoomsApi;
