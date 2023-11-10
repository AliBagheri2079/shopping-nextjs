import { DefaultMantineColor } from '@mantine/core';

export type PrimaryColor = DefaultMantineColor | undefined;

export type ChangePrimaryColor = (value?: PrimaryColor) => void;
