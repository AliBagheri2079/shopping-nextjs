'use client';

import { Card, Group, Skeleton, Stack } from '@mantine/core';

import { GLASS_MORPHISM } from '@/lib/utils';

export const SingeProductPlaceholder2 = () => (
  <Card
    padding='xs'
    styles={{
      root: GLASS_MORPHISM,
    }}
  >
    <Card.Section>
      <Skeleton animate={false} height={210} radius={0} />
    </Card.Section>

    <Stack mt='lg'>
      <Group justify='space-between'>
        <Skeleton animate={false} height={10} width='40%' />
        <Skeleton animate={false} height={10} width='40%' />
        <Skeleton animate={false} height={10} width='40%' />
        <Skeleton animate={false} height={10} width='40%' />

        <Skeleton animate={false} height={10} width='20%' />
        <Skeleton animate={false} height={10} width='20%' />
      </Group>

      <Skeleton animate={false} height={38} />
    </Stack>
  </Card>
);
