'use client';

import { Box, Overlay } from '@mantine/core';

import { GradiantWavesSvg } from '@/components';
import { useColorScheme } from '@/hooks';

const Wallpaper = () => {
  const { computedColorScheme } = useColorScheme();

  return (
    <Box pos='fixed' inset={0}>
      <GradiantWavesSvg width='100%' height='100%' />
      {computedColorScheme === 'light' ? (
        <Overlay
          gradient='linear-gradient(180deg,rgba(255, 255, 255, 0.65) 0%,rgba(255, 255, 255, 0.35) 100%)'
          styles={{
            root: {
              backdropFilter: 'saturate(3)',
            },
          }}
        />
      ) : null}
    </Box>
  );
};

export default Wallpaper;
