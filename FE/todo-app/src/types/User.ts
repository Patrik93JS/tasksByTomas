export type User = {
  id: number;
  name: string;
  email: string;
};

export type Token = string | null;

export type GetUserResponse = {
  user: User;
  token: Token;
};
