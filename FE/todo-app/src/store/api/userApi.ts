import { appApi } from ".";
import { GetUserResponse } from "@/types/User";

export const userApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<GetUserResponse, void>({
      query: (id) => ({
        url: `api/user/${id}`,
        method: "GET",
      }),
      providesTags: (result) => (result ? [{ type: "User" }] : []),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
