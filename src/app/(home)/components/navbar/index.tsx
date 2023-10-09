import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button, Container, Group, Title } from '@mantine/core';
import Link from 'next/link';

import classes from './index.module.css';
import { BrandLogo, BrandTitle } from '@/components/brand';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Container size='xl'>
        <Group justify='space-between' h='100%'>
          <Group gap='xs'>
            <BrandLogo width={40} height={40} />

            <Title order={2}>
              <BrandTitle size='xl' />
            </Title>
          </Group>

          <Group gap={4}>
            <SignInButton>
              <Button variant='transparent' color='dark.4' tt='capitalize'>
                sign in
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button tt='capitalize'>sign up</Button>
            </SignUpButton>
            {/* 
            <Button
              component={Link}
              href='/register?type=login'
              variant='transparent'
              color='dark.4'
              tt='capitalize'
            >
              login
            </Button>
            <Button
              component={Link}
              href='/register?type=signup'
              tt='capitalize'
            >
              signup
            </Button> 
            */}
          </Group>
        </Group>
      </Container>
    </nav>
  );
};

export default Navbar;
