export type SizeList = {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

export type MatcheSize = {
  largerThan: SizeList;
  smallerThan: SizeList;
};
