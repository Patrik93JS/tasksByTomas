import { ApiResponse } from "./Api";
import { GetGroupResponse } from "./Group";

export type CreateToDoRequest = ApiResponse<{
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
    to_do_group: GetGroupResponse;
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
  }[];
}>;

export type GetToDosResponse = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      completed: boolean;
      to_do_group: GetGroupResponse;
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
    }[];
  };
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
