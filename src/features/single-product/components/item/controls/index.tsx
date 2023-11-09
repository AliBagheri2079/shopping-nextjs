'use client';

import { Flex, rem, Text, UnstyledButton } from '@mantine/core';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';

import classes from './index.module.css';

export const SingleProductControls = () => {
  const [count, setCount] = useState(1);

  const increase = () => setCount(current => current + 1);
  const decrease = () => setCount(current => current - 1);

  return (
    <Flex
      direction={{ base: 'row', sm: 'column-reverse' }}
      gap={{ base: 'md', sm: 'lg' }}
      align='center'
      p='lg'
    >
      <UnstyledButton
        className={classes.control}
        onClick={decrease}
        disabled={count <= 1}
      >
        <IconMinus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </UnstyledButton>

      <div className={classes.number}>
        <Text className={classes.numberValue}>{count}</Text>
      </div>

      <UnstyledButton className={classes.control} onClick={increase}>
        <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </UnstyledButton>
    </Flex>
  );
};
