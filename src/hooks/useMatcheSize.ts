import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

type SizeList = {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

type MatchesSize = {
  largerThan: SizeList;
  smallerThan: SizeList;
};

export const useMatcheSize = (): MatchesSize => {
  const { breakpoints } = useMantineTheme();

  const largerThanXs = useMediaQuery(`(min-width: ${breakpoints.xs})`);
  const largerThanSm = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const largerThanMd = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const largerThanLg = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const largerThanXl = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  const smallerThanXs = useMediaQuery(`(max-width: ${breakpoints.xs})`);
  const smallerThanSm = useMediaQuery(`(max-width: ${breakpoints.sm})`);
  const smallerThanMd = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const smallerThanLg = useMediaQuery(`(max-width: ${breakpoints.lg})`);
  const smallerThanXl = useMediaQuery(`(max-width: ${breakpoints.xl})`);

  return {
    largerThan: {
      xs: largerThanXs,
      sm: largerThanSm,
      md: largerThanMd,
      lg: largerThanLg,
      xl: largerThanXl,
    },
    smallerThan: {
      xs: smallerThanXs,
      sm: smallerThanSm,
      md: smallerThanMd,
      lg: smallerThanLg,
      xl: smallerThanXl,
    },
  };
};
