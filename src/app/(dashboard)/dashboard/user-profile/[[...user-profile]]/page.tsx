import type { Metadata } from 'next';

import { UserProfileCard } from '@/components';

export const metadata: Metadata = {
  title: 'User Profile Page | Elixir Online Shop',
};

const UserProfilePage = () => <UserProfileCard />;

export default UserProfilePage;
