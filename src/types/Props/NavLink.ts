import { ReactNode } from 'react';

import { Category } from '../Utils';
import { IconProps } from './Icon';

export type NavLinkProps = {
  category: Category;
  label: string;
  href: string;
  icon: IconProps;
  badge?: ReactNode;
};
