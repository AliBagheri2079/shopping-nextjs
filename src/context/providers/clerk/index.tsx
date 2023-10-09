import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { FC, ReactNode } from 'react';

import Loading from '@/components/loading';

type Props = {
  children: ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#1f32c4',
          fontFamily: 'var(--mantine-font-family)',
        },
        elements: {
          card: {
            borderRadius: '0.4rem',
          },
        },
      }}
    >
      <ClerkLoading>
        <Loading />
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
};

export default AuthProvider;
