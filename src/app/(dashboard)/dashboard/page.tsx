import { UserButton } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Page | Elixir Online Shop',
};

export default function DashboardPage() {
  return (
    <UserButton
      afterSignOutUrl='/'
      afterMultiSessionSingleSignOutUrl='/'
      userProfileUrl='/user-profile'
    />
  );
}
