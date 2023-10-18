import { Title } from '@mantine/core';
import { FC } from 'react';

import { NavLinkProps } from '@/types';

type Props = Pick<NavLinkProps, 'category'>;

export const GroupCategory: FC<Props> = ({ category }) => (
  <Title order={5} c='gray.5' fw={500} tt='capitalize'>
    {category}
  </Title>
);
