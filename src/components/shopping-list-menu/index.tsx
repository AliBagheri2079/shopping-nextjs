'use client';

import { ActionIcon, Avatar, Badge, Group, ScrollArea } from '@mantine/core';
import { Menu, rem, Text } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

import { useShoppingListValueContext } from '@/hooks';
import { GLASS_MORPHISM, randomId } from '@/lib/utils';

export const ShoppingListMenu = () => {
  const { data } = useShoppingListValueContext();

  const target = (
    <ActionIcon
      variant='transparent'
      color='var(--mantine-color-text)'
      mr='xs'
      aria-label='Shopping Cart Icon Link'
    >
      <IconShoppingCart />
      {data && data.length > 0 ? (
        <Badge
          size='xs'
          w={22}
          h={18}
          p={0}
          styles={{
            root: {
              position: 'absolute',
              top: '-10%',
              left: '50%',
            },
          }}
        >
          {data.length < 100 ? data.length : '99+'}
        </Badge>
      ) : null}
    </ActionIcon>
  );

  const content = data?.map(({ image, title, price }) => {
    const id = randomId();
    return (
      <Menu.Item
        key={id}
        leftSection={<Avatar src={image} radius='xl' />}
        rightSection={
          <Text c='dimmed' size='xs'>
            ${price}
          </Text>
        }
      >
        <Group maw={rem(200)} px='sm'>
          <Text size='sm' fw={500}>
            {title}
          </Text>
        </Group>
      </Menu.Item>
    );
  });

  return (
    <Menu
      position='bottom-end'
      openDelay={100}
      closeDelay={200}
      offset={10}
      styles={{
        dropdown: {
          ...GLASS_MORPHISM,
          border: 'unset',
        },
      }}
    >
      <Menu.Target>{target}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Shopping List</Menu.Label>
        <ScrollArea type='never' h={350}>
          {content}
        </ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
};
