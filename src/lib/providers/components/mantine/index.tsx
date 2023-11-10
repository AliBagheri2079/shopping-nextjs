'use client';

import '@mantine/carousel/styles.css';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { FC } from 'react';

import { colorSchemeManager, generateTheme } from './plugins';
import { usePrimaryColor } from '@/hooks';
import { Children } from '@/types';

const Provider: FC<Children> = ({ children }) => {
  const [primaryColor] = usePrimaryColor();
  const theme = generateTheme({ primaryColor });

  return (
    <DirectionProvider>
      <MantineProvider
        theme={theme}
        colorSchemeManager={colorSchemeManager}
        defaultColorScheme='auto'
      >
        {children}
      </MantineProvider>
    </DirectionProvider>
  );
};

export default Provider;
