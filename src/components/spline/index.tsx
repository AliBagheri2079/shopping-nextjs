'use client';

import { SplineProps } from '@splinetool/react-spline';
import dynamic from 'next/dynamic';
import { FC } from 'react';

import loading from './loading';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading,
});

const Spline: FC<SplineProps> = props => {
  return <DynamicSpline {...props} />;
};

export default Spline;
