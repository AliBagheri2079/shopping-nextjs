import type { Metadata } from 'next';

import { RegisterWithAccounts, RegisterWithForm } from './components';

export const metadata: Metadata = {
  title: 'Register Page | Elixir Online Shop',
};

const RegisterPage = () => {
  return (
    <>
      <RegisterWithForm />
      <RegisterWithAccounts />
    </>
  );
};

export default RegisterPage;
