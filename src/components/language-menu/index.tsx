'use client';

import { ActionIcon, Menu, Radio, Text, useMantineTheme } from '@mantine/core';
import { IconWorld } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

import { collections } from './collections';
import { randomId } from '@/lib/utils';
import { GLASS_MORPHISM } from '@/lib/utils';

export const LanguageMenu = () => {
  // const { setDirection } = useDirection();
  const pathname = usePathname();
  const { primaryColor } = useMantineTheme();

  const target = (
    <ActionIcon
      variant='transparent'
      color='var(--mantine-color-text)'
      aria-label='Change Language Icon'
    >
      <IconWorld />
    </ActionIcon>
  );

  const content = collections.map(({ label, href, description }) => {
    const id = randomId();
    return (
      <Fragment key={id}>
        <Menu.Item<typeof Link>
          component={Link}
          href={href}
          color={pathname === label ? primaryColor : 'gray.6'}
          rightSection={
            <Text size='xs' c='gray.6'>
              {description}
            </Text>
          }
        >
          <Radio
            label={label.toLocaleUpperCase()}
            size='xs'
            checked={pathname === label}
          />
        </Menu.Item>
      </Fragment>
    );
  });

  return (
    <Menu
      trigger='hover'
      openDelay={100}
      closeDelay={200}
      offset={10}
      width={150}
      transitionProps={{ transition: 'fade', duration: 500 }}
      styles={{
        dropdown: {
          ...GLASS_MORPHISM,
          border: 'unset',
        },
      }}
    >
      <Menu.Target>{target}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Languages</Menu.Label>
        {content}
      </Menu.Dropdown>
    </Menu>
  );
};
