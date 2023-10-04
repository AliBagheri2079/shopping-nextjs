import { Center, Loader, Text } from '@mantine/core';

const Loading = () => {
  return (
    <Center h='100dvh'>
      <Loader size='sm' type='dots' mr='sm' />
      <Text size='sm' c='gray.500'>
        Processing...
      </Text>
    </Center>
  );
};

export default Loading;
