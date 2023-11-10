import { ColorSchemeScript } from '@mantine/core';
import { FC } from 'react';

import { poppins, sahel } from '@/assets/fonts';
import Providers from '@/lib/providers';
import { layout_metadata } from '@/lib/utils';
import { Children } from '@/types';

export const metadata = layout_metadata;

/*
  NOTE: CHANGE PROJECT STRUCTURE TO JUST DASHBOARD PAGE WITHOUT HOME PAGE WITH SIGNUP/SIGNIN MODAL LIKE 'HAMED BAHRAM' CLERK VIDEO
  TODO: REMOVE REACT ICONS PACKAGE AND USE JUST TABLER ICONS
  TODO: REMOVE PANDA CSS PACKAGE AND USE JUST MANTINE UI with Emotion
  TODO: COMPLETE LAYOUT METADATA URLS
  TODO: REMOVE ALL STYLELINT RULES AFTER THIRD OPTION
  TODO: REMOVE MANTINE FORM HOOKS AND DEVTOOL COMPONENT
  TODO: ADD ESLINT IMPORT PLUGINS
  TODO: REMOVE REGISTER2 ROUTE AND USE REGISTER MAIN ROUTE WITH CLERCK
  TODO: CHANGE BACKGROUND COLOR VARIABLE TO DARK LIGHT COLOR
  TODO: ADD CHILDREN FOR LOADING COMPONENT
  TODO: CHANGE CONTAINERS TO PROVIDERS
  TODO: CONVERT TOGGLE COLOR SCHEME SWITCH TO FRAMER MOTION VERSION TO ENABLE TRANSITION
*/
const RootLayout: FC<Children> = ({ children }) => {
  return (
    <html
      lang='en-US'
      dir='ltr'
      className={`${poppins.variable} ${sahel.variable}`}
    >
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
