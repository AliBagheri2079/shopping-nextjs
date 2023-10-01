import { ColorSchemeScript } from '@mantine/core';
import type { FC, ReactNode } from 'react';

import Styles from './layout.module.css';
import { montserrat, sahel } from '@/assets/fonts';
import Containers from '@/containers';
import { layoutMetadata } from '@/lib/utils';

export const metadata = layoutMetadata;

type Props = {
  children: ReactNode;
};

/*
  TODO: REMOVE REACT ICONS PACKAGE AND USE JUST TABLER ICONS
  TODO: COMPLETE LAYOUT METADATA URLS
*/
const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html
      lang='en-US'
      dir='ltr'
      className={`${montserrat.variable} ${sahel.variable}`}
    >
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body className={Styles.Wrapper}>
        <Containers>{children}</Containers>
      </body>
    </html>
  );
};

export default RootLayout;
