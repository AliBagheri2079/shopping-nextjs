'use client';

import { UserProfile } from '@clerk/nextjs';
import { useMantineTheme } from '@mantine/core';

export const UserProfileCard = () => {
  const { primaryColor } = useMantineTheme();

  return (
    <UserProfile
      path='/dashboard/user-profile'
      routing='path'
      appearance={{
        variables: {
          colorPrimary: primaryColor,
        },
        elements: {
          rootBox: {
            width: 'revert',
          },
          card: {
            // TODO: add on auth provider
            color: 'var(--mantine-color-text)',
            backgroundColor: 'var(--mantine-color-body)',
            backdropFilter: 'blur(1.15rem)',

            boxShadow: 'unset',
            width: 'unset',
            maxWidth: 'unset',
            margin: 'unset',
            marginLeft: '1.75rem',
          },
          navbar: {
            color: 'inherit',
            border: 'unset',
            borderInlineEnd: '1px solid var(--mantine-color-dark-light)',
          },
          navbarButton: {
            color: 'inherit',
          },
          headerTitle: {
            color: 'inherit',
          },
          profileSectionTitleText: {
            color: 'inherit',
          },
        },
      }}
    />
  );
};
