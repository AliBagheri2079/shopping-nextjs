import { useMutation, useQueryClient } from '@tanstack/react-query';

import { productApi } from '../api';
import { SingleProductData } from '../types';

const addSingleProduct = ({ data }: SingleProductData) =>
  productApi({ method: 'POST', data }).then(response => response.data);

export const useAddSingleProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data }: SingleProductData) => addSingleProduct({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['singleProduct'] });
    },
    onError: () => {
      throw new Error('Failed to add product');
    },
  });
};
