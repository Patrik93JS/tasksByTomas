export type ApiResponse<T = void> = {
  data: T;
  message: string;
  statusCode: number;
};

export type ApiRequest<T = void> = {
  data: T;
};

export type Paging = {
  current: number;
  max: number;
  total: number;
};
