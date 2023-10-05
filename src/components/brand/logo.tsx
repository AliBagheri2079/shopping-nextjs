import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import Logo from '@/assets/images/logo.png';

type Props = Omit<ImageProps, 'src' | 'alt'>;

const BrandLogo: FC<Props> = props => {
  return <Image src={Logo} alt='elixir logo' {...props} />;
};

export default BrandLogo;
