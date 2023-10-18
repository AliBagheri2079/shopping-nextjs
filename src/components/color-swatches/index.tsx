'use client';

import { ColorSwatch, Group, rem } from '@mantine/core';

import { collections } from './collections';
import { usePrimaryColor } from '@/hooks';
import { randomId } from '@/lib/utils';

export const ColorSwatches = () => {
  const [_, changePrimaryColor] = usePrimaryColor();

  const content = collections.map(({ variable, value }) => {
    const id = randomId();
    return (
      <ColorSwatch
        key={id}
        component='button'
        size={rem(14.5)}
        color={variable}
        withShadow={false}
        styles={{
          root: { cursor: 'pointer' },
          alphaOverlay: { backgroundImage: 'unset' },
        }}
        onClick={() => changePrimaryColor(value)}
        aria-label={`${value} color swatch button`}
      />
    );
  });

  return <Group gap='xs'>{content}</Group>;
};
