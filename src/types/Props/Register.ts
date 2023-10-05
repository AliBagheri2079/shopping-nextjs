import { SetStateAction } from 'react';

export type Register = {
  type: 'signup' | 'login';
  toggle: (value?: SetStateAction<'signup' | 'login'>) => void;
};
