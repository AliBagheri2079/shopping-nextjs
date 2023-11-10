import { FC } from 'react';

import {
  AuthProvider,
  AuthProvider2,
  ContextProvider,
  MantineProvider,
  StoreProvider,
  StoreProvider2,
} from './components';
import '@/assets/styles/global.css';
import { Children } from '@/types';

const Providers: FC<Children> = ({ children }) => (
  <MantineProvider>
    <AuthProvider>
      <AuthProvider2>
        <ContextProvider>
          <StoreProvider>
            <StoreProvider2>{children}</StoreProvider2>
          </StoreProvider>
        </ContextProvider>
      </AuthProvider2>
    </AuthProvider>
  </MantineProvider>
);

export default Providers;
