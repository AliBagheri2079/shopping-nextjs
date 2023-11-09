export type Category = string | number;

export type CategorizeData<T> = Record<Category, T[]>;
