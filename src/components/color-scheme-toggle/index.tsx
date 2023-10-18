'use client';

import { rem, Switch, Tooltip } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import cx from 'clsx';

import { StarsSvg } from '../svg';
import classes from './index.module.css';
import { useColorScheme } from '@/hooks';

export const ColorSchemeToggle = () => {
  const { toggleColorScheme } = useColorScheme();

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <label className={cx(classes.container)}>
      <Switch
        display='none'
        onChange={() => toggleColorScheme()}
        aria-label='Color scheme toggle switch'
      />

      <Tooltip
        label='Ctrl + J'
        position='bottom'
        offset={12}
        styles={{
          tooltip: {
            color: 'var(--mantine-color-text)',
            backgroundColor: 'var(--mantine-color-body)',
            backdropFilter: 'blur(1.15rem)',
            fontSize: rem(8.5),
            fontWeight: 500,
          },
        }}
      >
        <div className={cx(classes.icons)}>
          <div className={cx(classes.icons__cloud)} />

          <div className={cx(classes.icons__star)}>
            <StarsSvg />
          </div>

          <div className={cx(classes.icons__circle)}>
            <div className={cx(classes.moon__wrapper)}>
              <div className={cx(classes.moon)}>
                <div className={cx(classes.moon__spot)} />
                <div className={cx(classes.moon__spot)} />
                <div className={cx(classes.moon__spot)} />
              </div>
            </div>
          </div>
        </div>
      </Tooltip>
    </label>
  );
};
