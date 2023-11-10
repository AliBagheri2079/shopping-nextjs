'use client';

import { Badge, Button, Group, Rating, Stack, Text } from '@mantine/core';
import { IconClipboardText, IconInfoCircle } from '@tabler/icons-react';
import Image from 'next/image';

import { StatContent } from './content';
import {
  useShoppingListActionContext,
  useSingleProductValueContext,
} from '@/hooks';

export const SingleProductStat = () => {
  const { data } = useSingleProductValueContext();
  const dispatch = useShoppingListActionContext();

  const addItem = async () =>
    data && dispatch({ type: 'ADD_ITEM', payload: data });

  return (
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

      <Button
        variant='gradient'
        mt='auto'
        radius='md'
        tt='capitalize'
        onClick={addItem}
      >
        add to shopping list
      </Button>
    </Stack>
  );
};
