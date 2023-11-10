import { useSessionStorage } from '@mantine/hooks';

import { ChangePrimaryColor, PrimaryColor } from '@/types';

export const usePrimaryColor = (): [PrimaryColor, ChangePrimaryColor] => {
  const [primaryColor, setPrimaryColor] = useSessionStorage<PrimaryColor>({
    key: 'app-primary-color',
    defaultValue: 'blue',
    getInitialValueInEffect: true,
  });

  const changePrimaryColor: ChangePrimaryColor = value =>
    setPrimaryColor(current => value ?? current);

  return [primaryColor, changePrimaryColor];
};
