import { PaginateData } from '@/types';

export const paginateData = <T>({
  data,
  currentPage,
  perPage,
}: PaginateData<T>): T[] => {
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const itemsOnPage = data.slice(startIndex, endIndex);
  return itemsOnPage;
};
