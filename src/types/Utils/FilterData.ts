export type FilterQuery = string;

export type FilterFn<T> = (options: T, query: FilterQuery) => boolean;

export type FilterData<T> = {
  query: FilterQuery;
  data: T[];
  filterFn: FilterFn<T>;
};
