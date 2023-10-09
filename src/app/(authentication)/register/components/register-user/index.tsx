'use client';

import { Divider } from '@mantine/core';
import { notFound, useSearchParams } from 'next/navigation';

import Accounts from './accounts';
import Login from './login';
import Signup from './signup';
import { RegisterType } from '@/types/Props';

const RegisterUserWithNextAuth = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('type') as RegisterType;

  if (!(search === 'signup' || search === 'login')) notFound();

  return (
    <>
      {search === 'signup' ? <Signup /> : search === 'login' ? <Login /> : null}

      <Divider
        label='or continue with this Accounts from next auth'
        labelPosition='center'
        my='lg'
      />

      <Accounts />
    </>
  );
};

export default RegisterUserWithNextAuth;
