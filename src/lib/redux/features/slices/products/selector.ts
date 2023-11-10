import type { RootState } from '@/lib/redux';

export const selectProducts = ({ products }: RootState) => products;
