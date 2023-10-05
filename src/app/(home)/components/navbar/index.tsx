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

          <div>
            <Button component={Link} href='/register' tt='capitalize'>
              register
            </Button>
          </div>
        </Group>
      </Container>
    </nav>
  );
};

export default Navbar;
