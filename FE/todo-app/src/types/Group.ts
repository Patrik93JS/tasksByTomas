import { ApiRequest, ApiResponse } from "./Api";

export type CreateGroupToDoRequest = ApiRequest<{
  title: string;
  to_dos: number | string;
}>;

export type CreateGroupToDoResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
    to_dos: {
      data: {
        id: number;
        attributes: {};
      };
    };
  };
}>;

export type GetGroupResponse = ApiResponse<
  {
    id: number;
    attributes: {
      title: string;
      to_dos: {
        data: {
          id: number;
          attributes: {};
        };
      };
      createdAt: string;
      publishedAt: string;
      updatedAt: string;
    };
  }[]
>;
