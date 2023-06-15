import { appApi } from ".";
import { GetUserResponse } from "@/types/User";

export const userApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<GetUserResponse, void>({
      query: () => ({
        url: "api/users",
        method: "GET",
      }),
      providesTags: (result) => (result ? [{ type: "User" }] : []),
    }),
  }),
});

//TODO mozna neni potreba
