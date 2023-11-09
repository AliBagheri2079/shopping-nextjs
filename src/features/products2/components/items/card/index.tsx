'use client';

import {
  Anchor,
  Badge,
  Button,
  Card,
  Group,
  Rating,
  Stack,
  Text,
} from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { GLASS_MORPHISM } from '@/lib/utils';
import { ProductData } from '@/types';

export const ProductCard: FC<ProductData> = ({
  id,
  title,
  price,
  description,
  image,
  category,
  rating,
}) => (
  <Card
    padding='xs'
    styles={{
      root: GLASS_MORPHISM,
    }}
  >
    <Card.Section<typeof Link>
      component={Link}
      href={`/dashboard/product?id=${id}`}
    >
      <Image
        src={image}
        sizes='100vw'
        style={{
          width: '100%',
        }}
        width={500}
        height={280}
        alt={description}
      />
    </Card.Section>

    <Stack justify='space-between' mt='xs' h='100%'>
      <Group justify='space-between' wrap='nowrap'>
        <Anchor<typeof Link>
          component={Link}
          href={`/dashboard/product?id=${id}`}
          tt='capitalize'
          underline='never'
          lineClamp={2}
        >
          {title}
        </Anchor>

        <Text c='red'>${price}</Text>
      </Group>

      <div>
        <Group justify='space-between' mb='xs' wrap='nowrap'>
          <Badge size='sm' variant='light' color='gray' tt='lowercase'>
            {category}
          </Badge>

          <Rating size='sm' value={rating.rate} fractions={2} readOnly />
        </Group>

        <Button
          variant='light'
          tt='capitalize'
          leftSection={<IconShoppingCartPlus size={14} />}
          fullWidth
        >
          add to cart
        </Button>
      </div>
    </Stack>
  </Card>
);
