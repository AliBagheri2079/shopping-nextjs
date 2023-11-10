import { Badge, Button, Flex, Group, Rating, Stack, Text } from '@mantine/core';
import { IconClipboardText, IconInfoCircle } from '@tabler/icons-react';
import Image from 'next/image';

import { StatContent } from './content';
import { GLASS_MORPHISM } from '@/lib/utils';
import { ProductData } from '@/types';

type Props = {
  data: ProductData | undefined;
};

export const SingleProductItem3 = ({ data }: Props) => (
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
    <Stack style={{ flex: 1 }}>
      <div>
        <Image
          src={data?.image as string}
          sizes='100vw'
          style={{
            width: '100%',
            borderRadius: 'var(--mantine-radius-default)',
          }}
          width={400}
          height={350}
          objectFit='fill'
          alt={data?.description as string}
        />
      </div>

      <Group align='stretch'>
        <StatContent icon={<IconInfoCircle />}>
          <Text size='sm'>{data?.title}</Text>

          <Group justify='space-between' wrap='nowrap'>
            <Text c='red'>${data?.price}</Text>

            <Rating
              size='sm'
              value={data?.rating.rate}
              fractions={2}
              readOnly
            />
          </Group>
        </StatContent>

        <StatContent icon={<IconClipboardText />}>
          <Text size='sm'>{data?.description}</Text>
          <Badge size='sm' variant='light' color='gray' tt='lowercase'>
            {data?.category}
          </Badge>
        </StatContent>
      </Group>

      <Button variant='gradient' mt='auto' radius='md' tt='capitalize'>
        add to shopping list
      </Button>
    </Stack>
  </Flex>
);
