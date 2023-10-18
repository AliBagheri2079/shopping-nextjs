import { CategorizedData, Category } from '@/types';

export const categorizeData = <T extends { category: Category }>(
  data: T[],
): CategorizedData<T> => {
  const categorizedData: CategorizedData<T> = {};

  data.forEach(item => {
    if (!categorizedData[item.category]) categorizedData[item.category] = [];
    categorizedData[item.category].push(item);
  });

  return categorizedData;
};
