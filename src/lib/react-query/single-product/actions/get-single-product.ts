import { useQuery } from '@tanstack/react-query';

import { productApi } from '../api';
import { SingleProductData, SingleProductParams } from '../types';

const getSingleProduct = ({ id }: SingleProductParams) =>
  productApi({ method: 'GET', params: { id } }).then(response => response.data);

export const useGetSingleProductQuery = ({ id }: SingleProductParams) =>
  useQuery<SingleProductData>({
    queryKey: ['singleProduct'],
    queryFn: () => getSingleProduct({ id }),
  });
