'use client';

import { Badge, Button, Card, Group, Text } from '@mantine/core';
import cx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import classes from './index.module.css';
import { useShoppingListActionContext } from '@/hooks';
import { ProductData } from '@/types';

type Props = ProductData & {
  active: boolean;
  handleActiveSlide: (id: number) => void;
};

export const CarouselSlide: FC<Props> = ({
  active,
  handleActiveSlide,
  ...props
}) => {
  const dispatch = useShoppingListActionContext();
  const { id, title, price, description, image } = props;

  const addItem = async () => dispatch({ type: 'ADD_ITEM', payload: props });

  return (
    <Card
      shadow='sm'
      padding='xl'
      radius='xl'
      bg='transparent'
      classNames={{
        root: cx(classes.carouselSlide, active && classes.active),
      }}
      onClick={() => handleActiveSlide(id)}
      aria-current={active}
    >
      <Card.Section
        styles={{
          section: {
            margin: 'unset',
            padding: 'unset',
            position: 'absolute',
            inset: 0,
            zIndex: -1,
          },
        }}
      >
        <Image src={image} fill objectFit='cover' alt={title} />
      </Card.Section>

      <Card.Section
        classNames={{
          section: cx(classes.slideContent, active && classes.active),
        }}
        styles={{
          section: {
            margin: 'unset',
            padding: 'unset',
          },
        }}
      >
        <Group justify='space-between' mt='md' mb='xs' wrap='nowrap'>
          <Text fw={500} lineClamp={2}>
            {title}
          </Text>
          <Badge>${price}</Badge>
        </Group>

        <Text size='sm' c='dimmed' lineClamp={4}>
          {description}
        </Text>

        <Button
          variant='gradient'
          mt='auto'
          radius='md'
          tt='capitalize'
          onClick={addItem}
        >
          add to shopping list
        </Button>
      </Card.Section>
    </Card>
  );
};
