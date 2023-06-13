export type RegisterInputs = {
  username: string;
  email: string;
  password: string;
};

export type LoginInputs = {
  identifier: string;
  password: string;
};

export type LoginResponse = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
};

export type LoginRequest = LoginInputs;

export type RegisterRequest = RegisterInputs;

export type RegisterResponse = LoginResponse;
