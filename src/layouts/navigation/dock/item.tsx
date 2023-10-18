'use client';

import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';

import { InlineNavLink } from '@/components';
import { NavLinkProps } from '@/types';

type Props = {
  mouseX: MotionValue;
  item: NavLinkProps;
};

export const DockItem: FC<Props> = ({ mouseX, item }) => {
  const itemElm = useRef<HTMLLIElement>(null);

  const distance = useTransform(mouseX, val => {
    const bounds = itemElm.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.li
      ref={itemElm}
      style={{
        width,
        aspectRatio: '1 / 1',
      }}
    >
      <InlineNavLink {...item} />
    </motion.li>
  );
};
