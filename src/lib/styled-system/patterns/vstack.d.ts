/* eslint-disable */
import type { Tokens } from '../tokens/index';
import type { Properties } from '../types/csstype';
import type { ConditionalValue, SystemStyleObject } from '../types/index';
import type { PropertyValue } from '../types/prop-type';
import type { DistributiveOmit } from '../types/system-types';

export interface VstackProperties {
  justify?: PropertyValue<'justifyContent'>;
  gap?: PropertyValue<'gap'>;
}

interface VstackStyles
  extends VstackProperties,
    DistributiveOmit<SystemStyleObject, keyof VstackProperties> {}

interface VstackPatternFn {
  (styles?: VstackStyles): string;
  raw: (styles?: VstackStyles) => SystemStyleObject;
}

export declare const vstack: VstackPatternFn;
