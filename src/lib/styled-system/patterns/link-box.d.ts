/* eslint-disable */
import type { Tokens } from '../tokens/index';
import type { Properties } from '../types/csstype';
import type { ConditionalValue, SystemStyleObject } from '../types/index';
import type { PropertyValue } from '../types/prop-type';
import type { DistributiveOmit } from '../types/system-types';

export interface LinkBoxProperties {}

interface LinkBoxStyles
  extends LinkBoxProperties,
    DistributiveOmit<SystemStyleObject, keyof LinkBoxProperties> {}

interface LinkBoxPatternFn {
  (styles?: LinkBoxStyles): string;
  raw: (styles?: LinkBoxStyles) => SystemStyleObject;
}

export declare const linkBox: LinkBoxPatternFn;
