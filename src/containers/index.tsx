import { FC, ReactNode } from 'react';

import '@/assets/styles/global.css';
import {
  AuthProvider,
  AuthProvider2,
  MantineProvider,
} from '@/context/providers';

type Props = {
  children: ReactNode;
};

const Containers: FC<Props> = ({ children }) => {
  return (
    <MantineProvider>
      <AuthProvider>
        <AuthProvider2>{children}</AuthProvider2>
      </AuthProvider>
    </MantineProvider>
  );
};

export default Containers;
