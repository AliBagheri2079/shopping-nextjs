import type { Metadata } from 'next';

import { UserProfileCard } from '@/components';

export const metadata: Metadata = {
  title: 'User Profile Page | Elixir Online Shop',
};

export default function UserProfilePage() {
  return <UserProfileCard />;
}
