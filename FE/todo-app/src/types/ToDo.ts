import { ApiResponse, ApiRequest } from "./Api";

export type CreateToDoRequest = ApiRequest<{
  title: string;
  description: string;
  mustBeCompleted: Date;
  // completed: true;
  // to_do_group: number;
}>;

export type CreateToDoResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
    description: string;
    mustBeCompleted: Date;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}>;

export type GetToDosResponse = ApiResponse<
  {
    id: number;
    attributes: {
      title: string;
      description: string;
      mustBeCompleted: Date;
      completed: boolean;
      to_do_group: number;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[]
>;
export type UpdateToDoRequest = ApiRequest<{
  title: string;
  description: string;
  mustBeCompleted: Date;
  completed: boolean;
  to_do_group: number;
}>;

export type UpdateToDoResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
    description: string;
    mustBeCompleted: Date;
    completed: boolean;
    to_do_group: number;
  };
}>;
