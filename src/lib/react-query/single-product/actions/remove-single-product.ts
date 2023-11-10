import { useMutation, useQueryClient } from '@tanstack/react-query';

import { productApi } from '../api';
import { SingleProductParams } from '../types';

const removeSingleProduct = ({ id }: SingleProductParams) =>
  productApi({ method: 'DELETE', params: { id } }).then(
    response => response.data,
  );

export const useRemoveSingleProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: SingleProductParams) => removeSingleProduct({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['singleProduct'] });
    },
    onError: () => {
      throw new Error('Failed to remove product');
    },
  });
};
