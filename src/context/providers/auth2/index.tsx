'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Provider: FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
