import { Flex } from '@mantine/core';

import { SingleProductControls } from './controls';
import { SingleProductStat } from './stat';
import { GLASS_MORPHISM } from '@/lib/utils';

export const SingleProductItem = () => (
  <Flex
    direction={{ base: 'column', sm: 'row' }}
    gap={{ base: 'md', sm: 'lg' }}
    justify={{ sm: 'space-between' }}
    p='xl'
    styles={{
      root: {
        ...GLASS_MORPHISM,
        borderRadius: 'var(--mantine-radius-default)',
      },
    }}
  >
    <SingleProductControls />
    <SingleProductStat />
  </Flex>
);
