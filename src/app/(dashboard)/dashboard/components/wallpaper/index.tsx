'use client';

import { Box, Overlay } from '@mantine/core';

import { GradiantWavesSvg } from '@/components';
import { useColorScheme } from '@/hooks';

const Wallpaper = () => {
  const { computedColorScheme } = useColorScheme();
  const isDarkColorScheme = computedColorScheme === 'dark';

  return (
    <Box pos='fixed' inset={0}>
      <GradiantWavesSvg width='100%' height='100%' />
      <Overlay
        gradient={`linear-gradient(180deg,${
          isDarkColorScheme
            ? 'rgba(0, 0, 0, 0.65)'
            : 'rgba(255, 255, 255, 0.65)'
        } 0%,${
          isDarkColorScheme
            ? 'rgba(0, 0, 0, 0.35)'
            : 'rgba(255, 255, 255, 0.35)'
        } 100%)`}
        styles={{
          root: {
            backdropFilter: 'saturate(3)',
          },
        }}
      />
    </Box>
  );
};

export default Wallpaper;
