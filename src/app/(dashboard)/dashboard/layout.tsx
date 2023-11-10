import { FC } from 'react';

import { Header, MainLayout, MiddleLayout, Wallpaper } from './components';
import { Children } from '@/types';

const DashboardLayout: FC<Children> = ({ children }) => (
  <>
    <Wallpaper />
    <MainLayout>
      <Header />
      <MiddleLayout>{children}</MiddleLayout>
    </MainLayout>
  </>
);

export default DashboardLayout;
