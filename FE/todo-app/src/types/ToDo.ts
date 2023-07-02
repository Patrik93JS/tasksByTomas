import { ApiResponse, ApiRequest } from "./Api";

export type CreateToDoRequest = ApiRequest<{
  title: string;
  description: string;
  mustBeCompleted: Date;
  completed: boolean;
  to_do_group: number | null;
}>;

export type CreateToDoResponse = ApiResponse<{
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
export type UpdateToDoRequest = {
  id: number;
  title: string;
  description: string;
  mustBeCompleted: Date;
  completed: boolean;
  to_do_group: string;
};

export type UpdateToDoResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
    description: string;
    mustBeCompleted: Date;
    completed: boolean;
    to_do_group: string;
  };
}>;
