import type { Metadata } from 'next';

import {
  RegisterUserWithNextAuth,
  RegisterUserWithSupabase,
} from './components';

export const metadata: Metadata = {
  title: 'Register Page | Elixir Online Shop',
};

const RegisterPage = () => {
  return (
    <>
      <RegisterUserWithNextAuth />
      <RegisterUserWithSupabase />
    </>
  );
};

export default RegisterPage;
