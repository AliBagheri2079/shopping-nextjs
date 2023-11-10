'use client';

import { Divider } from '@mantine/core';
import { notFound, useSearchParams } from 'next/navigation';

import Accounts from './accounts';
import Login from './login';
import Signup from './signup';
import { Register2 } from '@/types/Props';

const RegisterUserWithSupabase = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('type') as Pick<Register2, 'type'>['type'];

  if (!(search === 'signup' || search === 'login')) notFound();

  return (
    <>
      {search === 'signup' ? <Signup /> : search === 'login' ? <Login /> : null}

      <Divider
        label='or continue with this Accounts from supabase'
        labelPosition='center'
        my='lg'
      />

      <Accounts />
    </>
  );
};

export default RegisterUserWithSupabase;
