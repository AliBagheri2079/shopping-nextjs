'use client';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { FC, ReactNode } from 'react';

import { colorSchemeManager, generateTheme } from './plugins';
import { usePrimaryColor } from '@/hooks';

type Props = {
  children: ReactNode;
};

const Provider: FC<Props> = ({ children }) => {
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
