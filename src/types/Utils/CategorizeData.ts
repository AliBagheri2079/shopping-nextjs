export type Category = string | number;

export type CategorizedData<T> = Record<Category, T[]>;
