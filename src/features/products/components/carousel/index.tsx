'use client';

import { Flex } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';

import { CarouselSlide } from './slide';
import { randomId } from '@/lib/utils';
import { getAllProducts } from '@/services';
import { ProductData } from '@/types';

export const ProductCarousel = () => {
  const [data, setData] = useState<ProductData[]>();
  const [activeItem, setActiveItem] = useState(1);

  useEffect(() => {
    getAllProducts<ProductData>({ sort: 'asc', limit: 6 }).then(response =>
      setData(response),
    );
  }, []);

  const handleActiveSlide = useCallback((id: number) => setActiveItem(id), []);

  const slides = data?.map(slide => {
    const id = randomId();
    return (
      <CarouselSlide
        key={id}
        active={slide.id === activeItem}
        handleActiveSlide={handleActiveSlide}
        {...slide}
      />
    );
  });

  return (
    <section>
      <Flex
        direction={{ base: 'column', sm: 'row', md: 'column', lg: 'row' }}
        justify='center'
        gap='xs'
        wrap='nowrap'
      >
        {slides}
      </Flex>
    </section>
  );
};
