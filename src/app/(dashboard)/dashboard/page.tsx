import type { Metadata } from 'next';

import { Products, Products2 } from '@/features';

export const metadata: Metadata = {
  title: 'Dashboard Page | Elixir Online Shop',
};

const DashboardPage = () => (
  <>
    <Products />
    {/* <Products2 /> */}
  </>
);

export default DashboardPage;
