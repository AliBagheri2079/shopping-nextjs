'use client';

import { Badge, Group, NavLink, Text } from '@mantine/core';
import cx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createElement, FC } from 'react';

import classes from './index.module.css';
import { NavLinkProps } from '@/types';

type Props = Omit<NavLinkProps, 'category'>;

export const GroupNavLink: FC<Props> = ({ label, href, icon, badge }) => {
  const pathname = usePathname();

  return (
    <NavLink<typeof Link>
      component={Link}
      href={href}
      active={pathname === href}
      label={
        <Group justify='space-between'>
          <Text tt='capitalize'>{label}</Text>
          {badge ? (
            <Badge size='sm' variant='light' w={18} h={18} p={0}>
              {badge}
            </Badge>
          ) : null}
        </Group>
      }
      leftSection={createElement(icon, {
        size: 20,
        stroke: 2,
      })}
      classNames={{
        root: cx(classes.groupLink),
      }}
    />
  );
};
