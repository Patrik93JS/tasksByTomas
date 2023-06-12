import {
  CreateGroupToDoRequest,
  CreateGroupToDoResponse,
  GetGroupResponse,
} from "@/types/Group";
import { appApi } from ".";

export const groupApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query<GetGroupResponse, void>({
      query: () => ({
        url: "api/to-do-groups",
        method: "GET",
      }),
      providesTags: (result) => (result ? [{ type: "Group" }] : []),
    }),
    createGroup: builder.mutation<
      CreateGroupToDoResponse,
      CreateGroupToDoRequest
    >({
      query: ({ ...body }) => ({
        url: "api/to-do-groups",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Group" }],
    }),
  }),
});

export const { useCreateGroupMutation, useGetGroupsQuery } = groupApi;
