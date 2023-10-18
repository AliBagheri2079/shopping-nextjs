'use client';

import { UserButton } from '@clerk/nextjs';
import { useMantineTheme } from '@mantine/core';

export const UserAvatar = () => {
  const { primaryColor } = useMantineTheme();

  return (
    <UserButton
      userProfileMode='navigation'
      userProfileUrl='/dashboard/user-profile'
      afterSignOutUrl='/'
      appearance={{
        variables: {
          colorPrimary: primaryColor,
        },
        elements: {
          card: {
            // TODO: add on auth provider
            color: 'var(--mantine-color-text)',
            backgroundColor: 'var(--mantine-color-body)',
            backdropFilter: 'blur(1.15rem)',
          },
          userPreviewMainIdentifier: {
            color: 'inherit',
          },
          userPreviewSecondaryIdentifier: {
            color: 'gray',
          },
          userButtonPopoverActionButton: {
            color: 'inherit',
          },
          userButtonPopoverActionButtonText: {
            color: 'inherit',
          },
          userButtonPopoverFooter: {
            '& .cl-internal-wkkub3': {
              color: 'gray',
            },
          },
        },
      }}
    />
  );
};
