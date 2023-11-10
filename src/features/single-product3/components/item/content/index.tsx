'use client';

import { Center, Paper, rem } from '@mantine/core';
import { cloneElement, FC, ReactElement } from 'react';

import classes from './index.module.css';
import { Children } from '@/types';

type Props = Children & {
  icon: ReactElement;
};

export const StatContent: FC<Props> = ({ icon, children }) => (
  <Paper className={classes.stat} shadow='sm' p='md'>
    <Center mb='xs'>
      {cloneElement(icon, {
        style: {
          width: rem(28),
          height: rem(28),
          color: 'var(--mantine-primary-color-filled)',
        },
      })}
    </Center>

    {children}
  </Paper>
);
