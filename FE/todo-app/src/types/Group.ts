import { ApiRequest, ApiResponse } from "./Api";

export type CreateGroupToDoRequest = ApiRequest<{
  title: string;
}>;

export type CreateGroupToDoResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
  };
}>;
export type GetGroupResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
  }[];
}>;
