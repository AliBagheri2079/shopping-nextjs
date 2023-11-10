import { auth, SignUp } from '@clerk/nextjs';
import { Flex } from '@mantine/core';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'SignUp Page | Elixir Online Shop',
};

const SignUpPage = () => {
  const { userId } = auth();

  if (userId) redirect('/dashboard');

  return (
    <Flex align='center' justify='center' mih='100dvh'>
      <SignUp
        redirectUrl='/dashboard'
        appearance={{
          variables: {
            colorBackground: '#b2afe5',
          },
          elements: {
            card: {
              width: '35rem',
            },
          },
        }}
      />
    </Flex>
  );
};

export default SignUpPage;
