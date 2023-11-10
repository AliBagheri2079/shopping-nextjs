'use client';

import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';

import { Children } from '@/types';

const Provider: FC<Children> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default Provider;
