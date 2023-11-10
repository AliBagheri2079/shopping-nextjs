import { TablerIconsProps } from '@tabler/icons-react';
import { ComponentPropsWithoutRef } from 'react';

export type SvgProps = ComponentPropsWithoutRef<'svg'>;

export type IconProps = (props: TablerIconsProps) => JSX.Element;
