export type ApiResponse<T> = {
  data: T | undefined;
  error: Error | null;
  isLoading: boolean;
};
