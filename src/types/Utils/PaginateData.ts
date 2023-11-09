export type PaginateData<T> = {
  data: T[];
  currentPage: number;
  perPage: number;
};
