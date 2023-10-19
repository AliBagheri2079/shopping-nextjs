import { Container, Paper } from '@mantine/core';
import cx from 'clsx';
import { FC, ReactNode } from 'react';

import classes from './index.module.css';
import { MacDock } from '@/layouts';
import { SIZE } from '@/lib/utils';

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => (
  <Container pos='relative' size='xl' h={SIZE.MAX_HEIGHT}>
    <Paper
      className={cx(classes.contentPosition, classes.glassmorphism)}
      mx='md'
      my={{ base: 'md', md: SIZE.MAIN_LAYOUT_BLOCK_MARGIN }}
    >
      {children}
    </Paper>

    <Paper
      className={cx(classes.navbarPosition, classes.glassmorphism)}
      mx='xl'
      mb='xs'
      hiddenFrom='md'
    >
      <MacDock />
    </Paper>
  </Container>
);

export default MainLayout;
