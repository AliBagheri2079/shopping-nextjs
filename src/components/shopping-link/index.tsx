import { ActionIcon, Badge } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';

export const ShoppingLink = () => {
  const productCount = '9+';

  return (
    <ActionIcon<typeof Link>
      component={Link}
      href='/products'
      variant='transparent'
      color='var(--mantine-color-text)'
      mr='xs'
      aria-label='Shopping Cart Icon Link'
    >
      <IconShoppingCart />
      <Badge
        size='xs'
        w={20}
        h={16}
        p={0}
        styles={{
          root: {
            position: 'absolute',
            top: '-10%',
            left: '50%',
          },
        }}
      >
        {productCount}
      </Badge>
    </ActionIcon>
  );
};
