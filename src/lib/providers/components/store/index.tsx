'use client';

import { Provider } from 'react-redux';

import { store } from '@/lib/redux';

const StoreProvider = ({ children }: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
