import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

import { ClearColorScheme, ColorScheme, ToggleColorScheme } from '@/types';

type Items = {
  computedColorScheme: ColorScheme;
  toggleColorScheme: ToggleColorScheme;
  clearColorScheme: ClearColorScheme;
};

export const useColorScheme = (): Items => {
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  const toggleColorScheme: ToggleColorScheme = value =>
    setColorScheme(value ?? computedColorScheme === 'light' ? 'dark' : 'light');

  return { computedColorScheme, toggleColorScheme, clearColorScheme };
};
