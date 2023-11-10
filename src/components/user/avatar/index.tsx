'use client';

import { UserButton } from '@clerk/nextjs';
import { useMantineTheme } from '@mantine/core';

import { GLASS_MORPHISM } from '@/lib/utils';

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
            ...GLASS_MORPHISM,
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
