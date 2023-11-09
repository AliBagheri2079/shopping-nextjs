import type { Metadata } from 'next';

import { SingleProduct, SingleProduct2, SingleProduct3 } from '@/features';

export const metadata: Metadata = {
  title: 'Single Product Page | Elixir Online Shop',
};

const SingleProductPage = () => (
  <>
    <SingleProduct />
    {/* <SingleProduct2 /> */}
    {/* <SingleProduct3 /> */}
  </>
);

export default SingleProductPage;
