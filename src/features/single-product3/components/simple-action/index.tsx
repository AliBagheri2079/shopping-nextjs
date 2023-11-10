import { Button, Group } from '@mantine/core';

import {
  useAddSingleProductMutation,
  useRemoveSingleProductMutation,
  useUpdateSingleProductMutation,
} from '@/lib/react-query';

export const SingeProductSimpleAction3 = () => {
  const { isPending, mutate } = useAddSingleProductMutation();
  const addSingleProduct = () => {
    // 'use server';
    const newProduct = {
      id: 25,
      title: 'Mens Casual Premium Slim Fit T-Shirts 4',
      price: 228.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button.',
      category: "men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: {
        rate: 4.9,
        count: 269,
      },
    };
    mutate({ data: newProduct });
  };

  const { isPending: isPending1, mutate: mutate1 } =
    useUpdateSingleProductMutation();
  const updateSingleProduct = () => {
    // 'use server';
    const updatedProduct = {
      id: 25,
      title: 'Mens Casual Premium Slim Fit T-Shirts 4',
      price: 228.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button.',
      category: "men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: {
        rate: 4.9,
        count: 269,
      },
    };
    mutate1({ id: 1, data: updatedProduct });
  };

  const { isPending: isPending2, mutate: mutate2 } =
    useRemoveSingleProductMutation();
  const removeSingleProduct = () => {
    // 'use server';
    mutate2({ id: 1 });
  };

  return (
    <Group grow mb='sm'>
      <Button variant='light' onClick={addSingleProduct} disabled={isPending}>
        Add Single Product
      </Button>
      <Button
        variant='light'
        onClick={updateSingleProduct}
        disabled={isPending1}
      >
        Update Single Product
      </Button>
      <Button
        variant='light'
        onClick={removeSingleProduct}
        disabled={isPending2}
      >
        Remove Single Product
      </Button>
    </Group>
  );
};
