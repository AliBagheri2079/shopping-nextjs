import type { Metadata } from 'next';

import { NotFoundSvg } from '@/components';

export const metadata: Metadata = {
  title: '404 Page | Elixir Online Shop',
};

const NotFoundPage = () => (
  <NotFoundSvg
    style={{
      width: '100%',
      height: '75dvh',
    }}
  />
);

export default NotFoundPage;
