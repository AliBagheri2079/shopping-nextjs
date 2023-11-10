import { useMutation, useQueryClient } from '@tanstack/react-query';

import { productApi } from '../api';
import { SingleProductData, SingleProductParams } from '../types';

type Params = SingleProductData & SingleProductParams;

const updateSingleProduct = ({ id, data }: Params) =>
  productApi({ method: 'PUT', params: { id }, data }).then(
    response => response.data,
  );

export const useUpdateSingleProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: Params) => updateSingleProduct({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['singleProduct'] });
    },
    onError: () => {
      throw new Error('Failed to update product');
    },
  });
};
