import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import { FC, ReactNode } from 'react';

import { Loading } from '@/components';

type Props = {
  children: ReactNode;
};

const Provider: FC<Props> = ({ children }) => (
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
