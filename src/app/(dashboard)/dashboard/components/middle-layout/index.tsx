import { Box, Flex, ScrollArea } from '@mantine/core';
import { FC } from 'react';

import { Sidebar } from '@/layouts';
import { SIZE } from '@/lib/utils';
import { Children } from '@/types';

const total = SIZE.MAX_HEIGHT;
const layoutOffset = SIZE.MAIN_LAYOUT_BLOCK_MARGIN;
const headerOffset = SIZE.HEADER_MIN_HEIGHT;

const MiddleLayout: FC<Children> = ({ children }) => (
  <Flex
    direction='row'
    justify='space-between'
    mah={`calc(${total} - calc(${layoutOffset} * 2) - ${headerOffset})`}
  >
    <Box<typeof ScrollArea>
      component={ScrollArea}
      type='never'
      p='calc(var(--mantine-spacing-lg) + 0.35rem)'
      style={{
        flex: '230px 0 0',
        borderInlineEnd: '1px solid var(--mantine-color-dark-light)',
      }}
      visibleFrom='md'
    >
      <Sidebar />
    </Box>

    <Box<typeof ScrollArea>
      component={ScrollArea}
      type='never'
      py='md'
      px={{ base: 'md', md: 'calc(var(--mantine-spacing-xl) * 1.35)' }}
      style={{
        flexGrow: 1,
      }}
    >
      <main>{children}</main>
    </Box>
  </Flex>
);

export default MiddleLayout;
