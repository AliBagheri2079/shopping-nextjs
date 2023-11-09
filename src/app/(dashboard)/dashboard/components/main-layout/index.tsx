import { Container, Paper } from '@mantine/core';
import cx from 'clsx';
import { FC } from 'react';

import classes from './index.module.css';
import { MacDock } from '@/layouts';
import { SIZE } from '@/lib/utils';
import { Children } from '@/types';

const MainLayout: FC<Children> = ({ children }) => (
  <Container pos='relative' size='xl' h={SIZE.MAX_HEIGHT}>
    <Paper
      mx='md'
      my={{ base: 'md', md: SIZE.MAIN_LAYOUT_BLOCK_MARGIN }}
      classNames={{
        root: cx(classes.contentPosition, classes.defaultStyle),
      }}
    >
      {children}
    </Paper>

    <Paper
      mx='xl'
      mb='xs'
      classNames={{
        root: cx(classes.navbarPosition, classes.defaultStyle),
      }}
      hiddenFrom='md'
    >
      <MacDock />
    </Paper>
  </Container>
);

export default MainLayout;
