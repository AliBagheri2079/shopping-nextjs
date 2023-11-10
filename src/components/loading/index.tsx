import { Center, Loader, Text } from '@mantine/core';

export const Loading = () => (
  <Center h='100dvh'>
    <Loader size='sm' type='dots' mr='sm' />
    <Text size='sm' c='gray.500'>
      Processing...
    </Text>
  </Center>
);
