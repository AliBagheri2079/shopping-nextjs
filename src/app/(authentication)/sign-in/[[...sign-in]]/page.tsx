import { auth, SignIn } from '@clerk/nextjs';
import { Flex } from '@mantine/core';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'SignIn Page | Elixir Online Shop',
};

export default function SignInPage() {
  const { userId } = auth();

  if (userId) redirect('/dashboard');

  return (
    <Flex align='center' justify='center' mih='100dvh'>
      <SignIn
        appearance={{
          elements: {
            card: {
              width: '35rem',
            },
          },
        }}
      />
    </Flex>
  );
}
