'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';

import Demo from './Direction';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify='center' mt='xl'>
      <Button variant='gradient'>Button with custom default gradient</Button>
      <Button color='blue'>Button with custom default gradient</Button>
      <Button color='cyan'>Button with custom default gradient</Button>
      <Button color='dark'>Button with custom default gradient</Button>
      <Button color='grape'>Button with custom default gradient</Button>
      <Button color='gray'>Button with custom default gradient</Button>
      <Button color='green'>Button with custom default gradient</Button>
      <Button color='indigo'>Button with custom default gradient</Button>
      <Button color='lime'>Button with custom default gradient</Button>
      <Button color='orange'>Button with custom default gradient</Button>
      <Button color='pink'>Button with custom default gradient</Button>
      <Button color='red'>Button with custom default gradient</Button>
      <Button color='teal'>Button with custom default gradient</Button>
      <Button color='violet'>Button with custom default gradient</Button>
      <Button color='yellow'>Button with custom default gradient</Button>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>

      <Demo />
    </Group>
  );
}

// import { useMantineColorScheme, Button, Group } from '@mantine/core';

// function Demo() {
//   const { setColorScheme, clearColorScheme } = useMantineColorScheme();

//   return (
//     <Group>
//       <Button onClick={() => setColorScheme('light')}>Light</Button>
//       <Button onClick={() => setColorScheme('dark')}>Dark</Button>
//       <Button onClick={() => setColorScheme('auto')}>Auto</Button>
//       <Button onClick={clearColorScheme}>Clear</Button>
//     </Group>
//   );
// }

// import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

// function Demo() {
//   // -> colorScheme is 'auto' | 'light' | 'dark'
//   const { colorScheme, setColorScheme } = useMantineColorScheme();

//   // -> computedColorScheme is 'light' | 'dark', argument is the default value
//   const computedColorScheme = useComputedColorScheme('light');

//   // Incorrect color scheme toggle implementation
//   // If colorScheme is 'auto', then it is not possible to
//   // change color scheme correctly in all cases:
//   // 'auto' can mean both light and dark
//   const toggleColorScheme = () => {
//     setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
//   };

//   // Correct color scheme toggle implementation
//   // computedColorScheme is always either 'light' or 'dark'
//   const toggleColorScheme = () => {
//     setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
//   };
// }

// import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
// import { IconSun, IconMoon } from '@tabler/icons-react';
// import cx from 'clsx';
// import classes from './Demo.module.css';

// function Demo() {
//   const { setColorScheme } = useMantineColorScheme();
//   const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

//   return (
//     <ActionIcon
//       onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
//       variant="default"
//       size="xl"
//       aria-label="Toggle color scheme"
//     >
//       <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
//       <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
//     </ActionIcon>
//   );
// }

//* css styles
// .icon {
//   width: rem(22px);
//   height: rem(22px);
// }

// .dark {
//   @mixin dark {
//     display: none;
//   }

//   @mixin light {
//     display: block;
//   }
// }

// .light {
//   @mixin light {
//     display: none;
//   }

//   @mixin dark {
//     display: block;
//   }
// }
