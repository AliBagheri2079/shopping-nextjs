import { MantineColorScheme } from '@mantine/core';

export type ColorScheme = MantineColorScheme;

export type ToggleColorScheme = (value?: MantineColorScheme) => void;

export type ClearColorScheme = () => void;
