'use client';

import {
  Avatar,
  Badge,
  Button,
  Card,
  Center,
  Group,
  Text,
} from '@mantine/core';
import moment from 'moment';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const UserPage = () => {
  const {
    data: session,
    status,
    update,
  } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/register?type=login');
    },
  });

  return (
    <Card bg='transparent' shadow='0' padding='lg'>
      <Card.Section>
        <Center>
          <Avatar
            src={session?.user?.image}
            alt='user avatar'
            size='lg'
            radius='xl'
          >
            {session?.user?.name}
          </Avatar>
        </Center>
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>{session?.user?.name}</Text>

        <Badge color='pink' variant='light' size='xs'>
          {moment(session?.expires, 'hh:mm:ss').fromNow()}
        </Badge>
      </Group>

      <Text size='sm' c='dimmed'>
        {session?.user?.email}
      </Text>

      <Button
        variant='light'
        color='blue'
        fullWidth
        mt='md'
        radius='md'
        onClick={() =>
          signOut({ callbackUrl: '/register?type=login', redirect: true })
        }
      >
        Sign Out
      </Button>
    </Card>
  );
};

export default UserPage;

/*
  NOTE: create UserPage for Server component
  import { getServerSession } from 'next-auth/next';
  import { redirect } from 'next/navigation';

  import { auth_options } from '@/lib/utils';

  const UserPage = async () => {
    const session = await getServerSession(auth_options);

    if (!session) redirect('/register?type=login');

    return (
      <ul>
        <li>{session.expires}</li>
        <li>{session.user?.name}</li>
        <li>{session.user?.email}</li>
        <li>{session.user?.image}</li>
      </ul>
    );
  };

  export default UserPage;
*/
