/* eslint-disable */
import type { Tokens } from '../tokens/index';
import type { Properties } from '../types/csstype';
import type { ConditionalValue, SystemStyleObject } from '../types/index';
import type { PropertyValue } from '../types/prop-type';
import type { DistributiveOmit } from '../types/system-types';

export interface BleedProperties {
  inline?: PropertyValue<'marginInline'>;
  block?: PropertyValue<'marginBlock'>;
}

interface BleedStyles
  extends BleedProperties,
    DistributiveOmit<SystemStyleObject, keyof BleedProperties> {}

interface BleedPatternFn {
  (styles?: BleedStyles): string;
  raw: (styles?: BleedStyles) => SystemStyleObject;
}

export declare const bleed: BleedPatternFn;
