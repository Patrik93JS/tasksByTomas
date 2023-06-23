import { ApiResponse, ApiRequest } from "./Api";

export type CreateToDoRequest = ApiRequest<{
  title: string;
  description: string;
  mustBeCompleted: string;
  completed: true;
  to_do_group: string | string;
}>;

export type CreateToDoResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
    description: string;
    mustBeCompleted: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}>;

export type GetToDosResponse = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      completed: boolean;
      to_do_group: string; //TODO spatne
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      createdBy: {
        data: {
          id: number;
        };
      };
      updatedBy: {
        data: {
          id: number;
        };
      };
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
