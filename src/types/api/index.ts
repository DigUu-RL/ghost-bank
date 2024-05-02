type TRequest = {
  accessToken: string | undefined;
};

export type TGet<T> = TRequest & {
  id?: T;
};

export type TPost<T> = TRequest & {
  data: T;
};

export type TPut<T> = TRequest & {
  data: T;
};

export type TDelete<T> = TRequest & {
  id: T;
};

export type TError = {
  statusCode: number;
  error: string;
  message: string;
  inner: string | undefined;
};
