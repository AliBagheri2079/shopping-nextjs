'use client';

import { Center, Pagination } from '@mantine/core';
import {
  IconArrowBarToLeft,
  IconArrowBarToRight,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';
import cx from 'clsx';

import classes from './index.module.css';
import {
  useMatcheSize,
  useProductsActionContext,
  useProductsValueContext,
} from '@/hooks';
import { SIZE } from '@/lib/utils';

const perPage = SIZE.PRODUCTS_PER_PAGE;

export const ProductPagination = () => {
  const size = useMatcheSize();
  const dispatch = useProductsActionContext();
  const { clonedData } = useProductsValueContext();
  const totalPages = clonedData ? Math.ceil(clonedData.length / perPage) : 1;

  const handlePageChange = async (page: number) =>
    dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: page,
    });

  return (
    <Center component='section'>
      <Pagination
        total={totalPages}
        onChange={handlePageChange}
        siblings={size.largerThan.sm ? 2 : 1}
        withEdges={size.largerThan.xs}
        nextIcon={IconArrowRight}
        previousIcon={IconArrowLeft}
        firstIcon={IconArrowBarToLeft}
        lastIcon={IconArrowBarToRight}
        dotsIcon={IconGripHorizontal}
        radius='md'
        classNames={{
          control: cx(classes.control),
        }}
      />
    </Center>
  );
};
