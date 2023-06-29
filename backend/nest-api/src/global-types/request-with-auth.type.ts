export type RequestWithAuth = Request & {
  headers: Pick<Request, 'headers'> & {
    authorization?: string;
  };
};
