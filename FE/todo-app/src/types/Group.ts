import { ApiRequest, ApiResponse } from "./Api";
import { to_do } from "./ToDo";

export type CreateGroupToDoRequest = ApiRequest<{
  title: string;
  to_dos: to_do[];
}>;

export type CreateGroupToDoResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
    to_dos: {
      data: to_do[];
    };
  };
}>;

export type GetGroupResponse = ApiResponse<
  {
    id: number;
    attributes: {
      title: string;
      to_dos: {
        data: to_do[];
      };
      createdAt: string;
      publishedAt: string;
      updatedAt: string;
    };
  }[]
>;
