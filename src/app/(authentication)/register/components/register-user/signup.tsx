import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Anchor,
  Button,
  Center,
  Checkbox,
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

import { SignupSchema, SignupType } from '@/types/Props';

const Signup = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupType>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      terms: undefined,
    },
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit: SubmitHandler<SignupType> = ({
    name,
    email,
    password,
    terms,
  }) => {
    signIn('credentials', {
      name,
      email,
      password,
      terms,
      callbackUrl: '/register/user',
    });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center mb={rem(18)}>
          <Text size={rem(12)} fw={500}>
            {upperFirst('signup to create account with next auth')}
          </Text>
        </Center>

        <Stack>
          <TextInput
            id='name'
            label='Name'
            placeholder='Your name'
            {...register('name')}
          />

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
            error={
              errors.password
                ? `Password should include ${errors.password.message}`
                : null
            }
            {...register('password')}
          />

          <Checkbox
            id='terms'
            label='I accept terms and conditions'
            error={errors.terms?.message}
            {...register('terms')}
          />
        </Stack>

        <Group justify='space-between' mt='md' wrap='nowrap'>
          <Anchor
            component='button'
            type='button'
            c='dimmed'
            size='xs'
            underline='always'
            onClick={() => router.replace('?type=login')}
          >
            {upperFirst('already have an account? Login')}
          </Anchor>

          <Button type='submit' disabled={isSubmitting}>
            {upperFirst('signup')}
          </Button>
        </Group>
      </form>

      {/* <DevTool control={control} /> */}
    </>
  );
};

export default Signup;
