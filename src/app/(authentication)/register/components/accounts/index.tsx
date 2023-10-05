import { Button, Divider, Group } from '@mantine/core';

// import { FaGithub } from 'react-icons/fa6';
// import { FcGoogle } from 'react-icons/fc';
import { GithubIcon } from '@/components/icons';
import { GoogleIcon } from '@/components/icons';
import { randomId } from '@/lib/utils';

const RegisterWithAccounts = () => {
  const accounts = [
    {
      name: 'Google',
      icon: GoogleIcon,
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
    },
  ];

  return (
    <>
      <Divider
        label='or continue with this Accounts'
        labelPosition='center'
        my='lg'
      />

      <Group my='md'>
        {accounts.map(({ name, icon: Icon }) => {
          const id = randomId();
          return (
            <Button
              key={id}
              variant='default'
              radius='xl'
              tt='capitalize'
              leftSection={<Icon />}
              // onClick={}
              fullWidth
            >
              {name}
            </Button>
          );
        })}
      </Group>
    </>
  );
};

export default RegisterWithAccounts;
