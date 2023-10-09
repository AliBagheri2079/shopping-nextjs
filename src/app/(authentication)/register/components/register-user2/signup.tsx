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
import { useForm } from '@mantine/form';
import { upperFirst } from '@mantine/hooks';
import { useRouter } from 'next/navigation';

import { supabase } from '@/lib/utils';
import { Register2 } from '@/types/Props';

type FormValues = Pick<Register2, 'signupValues'>['signupValues'];

const Signup = () => {
  const router = useRouter();
  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      terms: false,
    },

    validate: {
      email: val => (!/^\S+@\S+$/.test(val) ? 'Invalid email address' : null),
      password: val =>
        !/[0-9]/.test(val)
          ? 'number'
          : !/[a-z]/.test(val)
          ? 'lowercase letter'
          : !/[A-Z]/.test(val)
          ? 'uppercase letter'
          : !/[$&+,:;=?@#|'<>.^*()%!-]/.test(val)
          ? 'special symbol'
          : val.length <= 6
          ? 'at least 6 characters'
          : null,
    },
  });

  const handleSignup = async ({ name, email, password }: FormValues) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } },
      });
      form.reset();
      console.table({ data, error });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSignup)}>
      <Center mb={rem(18)}>
        <Text size={rem(12)} fw={500}>
          {upperFirst('signup to create account with supabase')}
        </Text>
      </Center>

      <Stack>
        <TextInput
          label='Name'
          placeholder='Your name'
          value={form.values.name}
          onChange={event =>
            form.setFieldValue('name', event.currentTarget.value)
          }
        />

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

        <Checkbox
          label='I accept terms and conditions'
          checked={form.values.terms}
          onChange={event =>
            form.setFieldValue('terms', event.currentTarget.checked)
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
          onClick={() => router.replace('?type=login')}
        >
          {upperFirst('already have an account? Login')}
        </Anchor>

        <Button type='submit'>{upperFirst('signup')}</Button>
      </Group>
    </form>
  );
};

export default Signup;
