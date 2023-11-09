import { CategorizeData, Category } from '@/types';

export const categorizeData = <T extends { category: Category }>(
  data: T[],
): CategorizeData<T> => {
  const categorizedData: CategorizeData<T> = {};

  data.forEach(item => {
    if (!categorizedData[item.category]) categorizedData[item.category] = [];
    categorizedData[item.category].push(item);
  });

  return categorizedData;
};
