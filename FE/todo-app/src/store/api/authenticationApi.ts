import { appApi } from "../api/index";
import { LoginRequest, LoginResponse, MeResponse, RegisterRequest, RegisterResponse } from "../../types/Auth";

export const authenticationApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ ...body }) => ({
        url: "api/auth/local",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: ({ ...body }) => ({
        url: "api/auth/local/register",
        method: "POST",
        body,
      }),
    }),
    me: builder.mutation<MeResponse, void>({
      query: () => ({
        url: "api/users/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useMeMutation } = authenticationApi;
