import { Text, TextProps } from '@mantine/core';
import { FC } from 'react';

type Props = Omit<TextProps, 'span' | 'c' | 'fw' | 'tt'>;

const BrandTitle: FC<Props> = props => {
  return (
    <>
      <Text span c='dark.4' tt='capitalize' {...props}>
        el
      </Text>
      <Text span c='blue' fw={700} {...props}>
        ixir
      </Text>
    </>
  );
};

export default BrandTitle;
