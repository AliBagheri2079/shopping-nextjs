import { Container, Group } from '@mantine/core';

import {
  ColorSchemeToggle,
  ColorSwatches,
  LanguageMenu,
  ShoppingLink,
  UserAvatar,
} from '@/components';
import { SIZE } from '@/lib/utils';

const Header = () => (
  <header>
    <Container
      fluid
      styles={{
        root: {
          borderBlockEnd: '1px solid var(--mantine-color-dark-light)',
        },
      }}
    >
      <Group justify='space-between' mih={SIZE.HEADER_MIN_HEIGHT}>
        <ColorSwatches />

        <Group gap='sm'>
          <ColorSchemeToggle />
          <LanguageMenu />
          <ShoppingLink />
          <UserAvatar />
        </Group>
      </Group>
    </Container>
  </header>
);

export default Header;
