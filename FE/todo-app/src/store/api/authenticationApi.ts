import { appApi } from "../api/index";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../../types/Auth";

export const authenticationApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ ...body }) => ({
        url: "/auth/local",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: ({ ...body }) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authenticationApi;
