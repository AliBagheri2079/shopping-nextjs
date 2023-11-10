import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Anchor,
  Button,
  Center,
  Group,
  PasswordInput,
  rem,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LoginSchema, LoginType } from '@/types/Props';

const Login = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginType> = ({ email, password }) => {
    signIn('credentials', { email, password, callbackUrl: '/register/user' });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center mb={rem(18)}>
          <Text size={rem(12)} fw={500}>
            {upperFirst('login to exist account with next auth')}
          </Text>
        </Center>

        <Stack>
          <TextInput
            required
            id='email'
            label='Email'
            placeholder='hello@gmail.com'
            error={errors.email?.message}
            {...register('email')}
          />

          <PasswordInput
            required
            id='password'
            label='Password'
            placeholder='Your password'
            error={errors.password?.message}
            {...register('password')}
          />
        </Stack>

        <Group justify='space-between' mt='md' wrap='nowrap'>
          <Anchor
            component='button'
            type='button'
            c='dimmed'
            size='xs'
            underline='always'
            onClick={() => router.replace('?type=signup')}
          >
            {upperFirst('dont have an account? Signup')}
          </Anchor>

          <Button type='submit' disabled={isSubmitting}>
            {upperFirst('login')}
          </Button>
        </Group>
      </form>

      {/* <DevTool control={control} /> */}
    </>
  );
};

export default Login;
