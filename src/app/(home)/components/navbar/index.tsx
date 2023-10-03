import { Button, Container, Group, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import Styles from './index.module.css';
import Logo from '@/assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className={Styles.Wrapper}>
      <Container size='xl'>
        <Group justify='space-between' h='100%'>
          <Group gap='xs'>
            <Image src={Logo} alt='elixir favicon' width={35} height={35} />

            <Title order={2} tt='capitalize'>
              <Text span size='xl' c='dark.4'>
                El
              </Text>
              <Text span size='xl' c='blue' fw={700}>
                ixir
              </Text>
            </Title>
          </Group>

          <Group gap={6}>
            <Button
              component={Link}
              href='/login'
              variant='transparent'
              color='dark.4'
              tt='capitalize'
            >
              Login
            </Button>
            <Button
              component={Link}
              href='/signup'
              color='blue'
              tt='capitalize'
            >
              Signup
            </Button>
          </Group>
        </Group>
      </Container>
    </nav>
  );
};

export default Navbar;
