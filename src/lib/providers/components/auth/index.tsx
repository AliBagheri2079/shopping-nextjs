import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import { FC } from 'react';

import { Loading } from '@/components';
import { Children } from '@/types';

const Provider: FC<Children> = ({ children }) => (
  <ClerkProvider
    appearance={{
      variables: {
        fontFamily: 'var(--mantine-font-family)',
      },
      elements: {
        card: {
          borderRadius: 'var(--mantine-radius-default)',
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

export default Provider;
