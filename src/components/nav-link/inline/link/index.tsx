'use client';

import { ActionIcon, useMantineTheme } from '@mantine/core';
import cx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createElement, FC } from 'react';

import classes from './index.module.css';
import { NavLinkProps } from '@/types';

type Props = Omit<NavLinkProps, 'category' | 'badge'>;

export const InlineNavLink: FC<Props> = ({ label, href, icon }) => {
  const pathname = usePathname();
  const { primaryColor } = useMantineTheme();

  return (
    <ActionIcon<typeof Link>
      component={Link}
      href={href}
      variant='outline'
      color={pathname === href ? primaryColor : 'var(--mantine-color-text)'}
      classNames={{
        root: cx(classes.inlineLink),
      }}
      aria-label={label}
    >
      {createElement(icon, {
        stroke: 1.5,
        className: cx(classes.linkIcon),
      })}
    </ActionIcon>
  );
};
