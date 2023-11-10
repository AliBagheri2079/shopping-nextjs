'use client';

import { List, Stack } from '@mantine/core';

import { collections } from '../collections';
import { GroupCategory, GroupNavLink } from '@/components';
import { categorizeData } from '@/lib/utils';
import { randomId } from '@/lib/utils';

export const Sidebar = () => {
  const categorizedCollections = categorizeData(collections);

  const content = Object.entries(categorizedCollections).map(
    ([category, items]) => {
      const groupId = randomId();
      return (
        <Stack key={groupId} justify='space-between' gap='xs'>
          <GroupCategory category={category} />

          <List listStyleType='none'>
            {items.map(item => {
              const linkId = randomId();
              return (
                <List.Item
                  key={linkId}
                  styles={{
                    itemWrapper: {
                      display: 'revert',
                    },
                  }}
                >
                  <GroupNavLink {...item} />
                </List.Item>
              );
            })}
          </List>
        </Stack>
      );
    },
  );

  return (
    <nav>
      <Stack
        justify='space-between'
        gap='calc(var(--mantine-spacing-lg) + 0.25rem)'
      >
        {content}
      </Stack>
    </nav>
  );
};
