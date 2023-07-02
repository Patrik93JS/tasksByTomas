import { ApiResponse, ApiRequest } from "./Api";

export type to_do_group = {
  data: {
    id: number;
    attributes: {
      title: string;
      to_dos: {
        data: {
          id: number;
          attributes: {
            title: string;
            description: string;
            mustBeCompleted: Date;
            completed: boolean;
            to_do_group: {
              data: {
                id: number;
                attributes: {};
              };
              createdAt: string;
              updatedAt: string;
              publishedAt: string;
              createdBy: {
                data: {
                  id: number;
                  attributes: {};
                };
              };
              updatedBy: {
                data: {
                  id: number;
                  attributes: {};
                };
              };
            };
          };
        };
      };
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      createdBy: {
        data: {
          id: number;
          attributes: {};
        };
      };
      updatedBy: {
        data: {
          id: number;
          attributes: {};
        };
      };
    };
  };
};

export type CreateToDoRequest = ApiRequest<{
  title: string;
  description: string;
  mustBeCompleted: Date | undefined;
  completed: boolean;
  to_do_group: number | null;
}>;

export type CreateToDoResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
    description: string;
    mustBeCompleted: Date | undefined;
    completed: boolean;
    to_do_group: to_do_group;
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
      mustBeCompleted: Date | undefined;
      completed: boolean;
      to_do_group: to_do_group;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      createdBy: {
        data: {
          id: number;
          attributes: {};
        };
      };
      updatedBy: {
        data: {
          id: number;
          attributes: {};
        };
      };
    };
  }[]
>;
export type UpdateToDoRequest = {
  id: number;
  title: string;
  description: string;
  mustBeCompleted: Date | undefined;
  completed: boolean;
  to_do_group: number | null;
};

export type UpdateToDoResponse = ApiResponse<{
  id: number;
  attributes: {
    title: string;
    description: string;
    mustBeCompleted: Date | undefined;
    completed: boolean;
    to_do_group: to_do_group;
  };
}>;
