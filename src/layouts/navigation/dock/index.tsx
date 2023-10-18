'use client';

import { motion, useMotionValue } from 'framer-motion';

import { collections } from '../collections';
import { DockItem } from './item';
import { randomId } from '@/lib/utils';

export const Dock = () => {
  const mouseX = useMotionValue(Infinity);

  const content = collections.map(item => {
    const id = randomId();
    return <DockItem key={id} mouseX={mouseX} item={item} />;
  });

  return (
    <motion.nav>
      <motion.ul
        onMouseMove={e => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        style={{
          height: '2.5rem',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
          gap: '0.5rem',
          paddingInline: '0.5rem',
          marginBlock: '0.5rem',
          marginInline: 'auto',
          listStyleType: 'none',
        }}
      >
        {content}
      </motion.ul>
    </motion.nav>
  );
};
