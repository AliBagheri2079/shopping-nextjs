import {
  Icon3dCubeSphere,
  IconBrandBehance,
  IconCamera,
  IconCurrencyBitcoin,
  IconDevicesPc,
  IconGridDots,
  IconHeartHandshake,
  IconItalic,
  IconMessage,
  IconMovie,
  IconPencil,
  IconReload,
  IconReportAnalytics,
  IconSchool,
} from '@tabler/icons-react';

import { NavLinkProps } from '@/types';

export const collections: NavLinkProps[] = [
  {
    category: 'Apps',
    label: 'all apps',
    href: '/all-apps',
    icon: IconGridDots,
  },
  {
    category: 'Apps',
    label: 'updates',
    href: '/updates',
    icon: IconReload,
    badge: 3,
  },
  {
    category: 'categories',
    label: 'photography',
    href: '/photography',
    icon: IconCamera,
  },
  {
    category: 'categories',
    label: 'graphic design',
    href: '/graphic-design',
    icon: IconHeartHandshake,
  },
  { category: 'categories', label: 'video', href: '/video', icon: IconMovie },
  {
    category: 'categories',
    label: 'illustrations',
    href: '/illustrations',
    icon: IconPencil,
  },
  {
    category: 'categories',
    label: 'ui/ux',
    href: '/ui-ux',
    icon: IconDevicesPc,
  },
  {
    category: 'categories',
    label: '3d/ar',
    href: '/3d-ar',
    icon: Icon3dCubeSphere,
  },
  {
    category: 'fonts',
    label: 'manage fonts',
    href: '/manage-fonts',
    icon: IconItalic,
  },
  {
    category: 'resource links',
    label: 'stock',
    href: '/stock',
    icon: IconCurrencyBitcoin,
  },
  {
    category: 'resource links',
    label: 'tutorials',
    href: '/tutorials',
    icon: IconSchool,
  },
  {
    category: 'resource links',
    label: 'portfolio',
    href: '/portfolio',
    icon: IconReportAnalytics,
  },
  {
    category: 'resource links',
    label: 'behance',
    href: '/behance',
    icon: IconBrandBehance,
  },
  {
    category: 'resource links',
    label: 'social forum',
    href: '/social-forum',
    icon: IconMessage,
  },
];
