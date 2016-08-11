// Error response object returned by server.
export interface ErrorResponse {
  message: string;
  status: number;
  path: string;
  time: string;
}
