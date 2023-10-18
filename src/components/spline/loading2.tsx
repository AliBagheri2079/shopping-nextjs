import { TbLoader } from 'react-icons/tb';

import { css } from '@/lib/styled-system/css';
import { stack } from '@/lib/styled-system/patterns';

const Loading = () => {
  return (
    <div
      className={stack({
        direction: 'row',
        align: 'center',
        justify: 'center',
        minH: 'svh',
      })}
    >
      <TbLoader size={25} />
      <span className={css({ fontSize: 'sm', color: 'gray.500' })}>
        Processing...
      </span>
    </div>
  );
};

export default Loading;
