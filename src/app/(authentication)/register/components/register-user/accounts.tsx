import { Button, Group } from '@mantine/core';
import { signIn } from 'next-auth/react';

import { GithubIcon, GoogleIcon } from '@/components';
import { randomId } from '@/lib/utils';

const items = [
  {
    name: 'google',
    icon: <GoogleIcon size={18} />,
  },
  {
    name: 'github',
    icon: <GithubIcon size={20} />,
  },
];

const Accounts = () => {
  return (
    <Group my='md'>
      {items.map(({ name, icon }) => {
        const id = randomId();
        return (
          <Button
            key={id}
            color='dark.8'
            radius='xl'
            tt='capitalize'
            leftSection={icon}
            onClick={() => signIn(name, { callbackUrl: '/register/user' })}
            fullWidth
          >
            {`continue with ${name}`}
          </Button>
        );
      })}
    </Group>
  );
};

export default Accounts;
