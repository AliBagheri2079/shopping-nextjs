import type { Metadata } from 'next';

import { Navbar, Room } from './components';

export const metadata: Metadata = {
  title: 'Home Page | Elixir Online Shop',
};

const HomePage = () => {
  return (
    <header>
      <Room />
      <Navbar />
    </header>
  );
};

export default HomePage;
