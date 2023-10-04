import { DirectionProvider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { FC, ReactNode } from 'react';

import { colorSchemeManager, theme } from './plugins';
import '@/assets/styles/global.css';

type Props = {
  children: ReactNode;
};

const Containers: FC<Props> = ({ children }) => {
  return (
    <DirectionProvider>
      <MantineProvider
        theme={theme}
        colorSchemeManager={colorSchemeManager}
        defaultColorScheme='auto'
        // withCssVariables={false}
        // classNamesPrefix="app"
      >
        {children}
      </MantineProvider>
    </DirectionProvider>
  );
};

export default Containers;
