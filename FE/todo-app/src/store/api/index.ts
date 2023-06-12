import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1338/",
    prepareHeaders: (headers) => {
      const token =
        "19dbc082d7bd54a3c67cf8191987961c7919084ff9e0843335ce69efccd632307945bb777dbda80fd30bae122414ca0361734d2bde10ea5acd87b4094ea1449a69f79fd64b7ad37528431441479557133afed9e653ee37141a745bfdb5436413b0222171eab84e86beae4281f1f32c6e81cbb1e5000c179c2922ac81b70f5d44";
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  tagTypes: ["Group", "User"],
  endpoints: () => ({}),
});
