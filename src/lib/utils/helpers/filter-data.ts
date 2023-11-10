import { FilterData } from '@/types';

export const filterData = <T>({
  query,
  data,
  filterFn,
}: FilterData<T>): T[] => {
  const filteredItems = data.filter(options => filterFn(options, query));
  return filteredItems;
};
