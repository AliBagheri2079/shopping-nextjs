import { SetStateAction } from 'react';

export type Register2 = {
  type: 'signup' | 'login';
  signupValues: {
    name: string;
    email: string;
    password: string;
    terms: boolean;
  };
  loginValues: {
    email: string;
    password: string;
  };
  toggle: (value?: SetStateAction<'signup' | 'login'>) => void;
};
