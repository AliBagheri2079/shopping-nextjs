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
import { useForm } from '@mantine/form';
import { upperFirst } from '@mantine/hooks';
import { useRouter } from 'next/navigation';

import { supabase } from '@/lib/utils';
import { Register2 } from '@/types/Props';

type FormValues = Pick<Register2, 'loginValues'>['loginValues'];

const Login = () => {
  const router = useRouter();
  const form = useForm<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: val => (val.length <= 1 ? 'Invalid email address' : null),
      password: val => (val.length <= 1 ? 'Invalid Password' : null),
    },
  });

  const handleLogin = async ({ email, password }: FormValues) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      form.reset();
      console.table({ data, error });
    } catch (error) {
      console.error('Error login:', error);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleLogin)}>
      <Center mb={rem(18)}>
        <Text size={rem(12)} fw={500}>
          {upperFirst('login to exist account with supabase')}
        </Text>
      </Center>

      <Stack>
        <TextInput
          required
          label='Email'
          placeholder='hello@gmail.com'
          value={form.values.email}
          onChange={event =>
            form.setFieldValue('email', event.currentTarget.value)
          }
          error={form.errors.email}
        />

        <PasswordInput
          required
          label='Password'
          placeholder='Your password'
          value={form.values.password}
          onChange={event =>
            form.setFieldValue('password', event.currentTarget.value)
          }
          error={
            form.errors.password
              ? `Password should include ${form.errors.password}`
              : null
          }
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

        <Button type='submit'>{upperFirst('login')}</Button>
      </Group>
    </form>
  );
};

export default Login;
