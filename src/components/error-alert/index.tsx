import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { FC } from 'react';

export const ErrorAlert: FC<Error> = ({ name, message }) => (
  <Alert
    variant='light'
    color='red'
    title={name}
    icon={<IconAlertCircle size={24} stroke={1.5} />}
    mih={150}
    p='xl'
  >
    {message}
  </Alert>
);
