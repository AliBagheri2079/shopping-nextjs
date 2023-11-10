import { Group, Paper, Stack, Text, Title } from '@mantine/core';
import { FC } from 'react';

import { BrandLogo, BrandTitle } from '@/components/brand';
import { Children } from '@/types';

const RegisterLayout: FC<Children> = ({ children }) => {
  return (
    <Group align='center' justify='center' h='100dvh' grow>
      <Paper shadow='xl' p='xl' maw='32rem'>
        <Stack align='center' gap={0} mb='0.6rem'>
          <BrandLogo width={50} height={50} />

          <Title order={2}>
            <Text span size='1.4rem' c='dark.4'>
              Welcome to
            </Text>{' '}
            <BrandTitle size='1.4rem' />
          </Title>
        </Stack>

        {children}
      </Paper>
    </Group>
  );
};

export default RegisterLayout;
