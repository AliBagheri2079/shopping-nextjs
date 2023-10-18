import { FC, ReactNode } from 'react';

import { Header, MainLayout, MiddleLayout, Wallpaper } from './components';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => (
  <>
    <Wallpaper />
    <MainLayout>
      <Header />
      <MiddleLayout>{children}</MiddleLayout>
    </MainLayout>
  </>
);

export default DashboardLayout;
