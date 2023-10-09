import { FC, ReactNode } from 'react';

import '@/assets/styles/global.css';
import { AuthProvider, AuthProvider2, UiProvider } from '@/context/providers';

type Props = {
  children: ReactNode;
};

const Containers: FC<Props> = ({ children }) => {
  return (
    <UiProvider>
      <AuthProvider>
        <AuthProvider2>{children}</AuthProvider2>
      </AuthProvider>
    </UiProvider>
  );
};

export default Containers;
