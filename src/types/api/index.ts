export type TGet = {
  id?: string;
  accessToken: string;
};

export type TPost<T> = {
  data: T;
  accessToken: string;
};

export type TPut<T> = {
  data: T;
  accessToken: string;
};

export type TDelete = {
  id: number;
  accessToken: string;
};

export type TError = {
  statusCode: number;
  error: string;
  message: string;
  inner: string | undefined;
};
