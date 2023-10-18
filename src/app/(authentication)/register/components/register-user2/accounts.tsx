import { Button, Group } from '@mantine/core';
import { Provider } from '@supabase/supabase-js';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

import { randomId } from '@/lib/utils';
import { supabase } from '@/lib/utils';

const items = [
  {
    name: 'google',
    icon: <FcGoogle size={20} />,
  },
  {
    name: 'github',
    icon: <FaGithub size={20} />,
  },
];

const Accounts = () => {
  const handleSignInAccounts = async (provider: Provider) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
      });
      console.table({ data, error });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

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
            onClick={() => handleSignInAccounts(name as Provider)}
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
