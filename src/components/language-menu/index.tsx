'use client';

import {
  ActionIcon,
  Menu,
  Radio,
  Text,
  useDirection,
  useMantineTheme,
} from '@mantine/core';
import { IconWorld } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';

import { collections } from './collections';
import { randomId } from '@/lib/utils';
import { Language } from '@/types';

export const LanguageMenu = () => {
  const [language, setLanguage] = useState<Language>('en');
  const { setDirection } = useDirection();
  // const pathname = usePathname();
  const { primaryColor } = useMantineTheme();

  const content = collections.map(({ label, href, description }) => {
    const id = randomId();
    return (
      <Fragment key={id}>
        <Menu.Item
          // <typeof Link>
          // component={Link}
          // href={href}
          color={language === label ? primaryColor : 'gray.6'}
          rightSection={
            <Text size='xs' c='gray.6'>
              {description}
            </Text>
          }
          onClick={() => setDirection(label === 'en' ? 'ltr' : 'rtl')}
        >
          <Radio
            label={label.toLocaleUpperCase()}
            size='xs'
            checked={language === label}
            onChange={() => setLanguage(label)}
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
      styles={{
        dropdown: {
          backgroundColor: 'var(--mantine-color-body)',
          backdropFilter: 'blur(1.15rem)',
          border: 'unset',
        },
      }}
    >
      <Menu.Target>
        <ActionIcon
          variant='transparent'
          color='var(--mantine-color-text)'
          aria-label='Change Language Icon'
        >
          <IconWorld />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Languages</Menu.Label>

        {content}
      </Menu.Dropdown>
    </Menu>
  );
};
