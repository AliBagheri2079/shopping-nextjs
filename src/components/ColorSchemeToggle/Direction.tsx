import { ActionIcon, useDirection } from '@mantine/core';
import {
  IconTextDirectionLtr,
  IconTextDirectionRtl,
} from '@tabler/icons-react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon
      onClick={() => toggleDirection()}
      variant='default'
      radius='md'
      size='lg'
    >
      {dir === 'rtl' ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}
export default Demo;

//* css
// .demo {
//   text-align: center;
//   color: var(--mantine-color-white);
//   padding: var(--mantine-spacing-md);

//   /* LTR styles */
//   background-color: var(--mantine-color-blue-filled);

//   @mixin rtl {
//     /* RTL styles override LTR styles */
//     background-color: var(--mantine-color-red-filled);
//   }
// }
