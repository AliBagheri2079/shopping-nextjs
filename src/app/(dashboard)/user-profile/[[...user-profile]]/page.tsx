import { UserProfile } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Profile Page | Elixir Online Shop',
};

export default function UserProfilePage() {
  return <UserProfile path='/user-profile' routing='path' />;
}
