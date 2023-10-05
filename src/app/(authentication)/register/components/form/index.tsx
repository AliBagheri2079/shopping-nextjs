'use client';

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
import { upperFirst, useToggle } from '@mantine/hooks';

import { Register } from '@/types/Props';

type Toggle = Pick<Register, 'type'>['type'];
type FormValues = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
};

const RegisterWithForm = () => {
  const [type, toggle] = useToggle<Toggle>(['signup', 'login']);
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
        type === 'signup'
          ? !/[0-9]/.test(val)
            ? 'number'
            : !/[a-z]/.test(val)
            ? 'lowercase letter'
            : !/[A-Z]/.test(val)
            ? 'uppercase letter'
            : !/[$&+,:;=?@#|'<>.^*()%!-]/.test(val)
            ? 'special symbol'
            : val.length <= 6
            ? 'at least 6 characters'
            : null
          : null,
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(({ name, email, password, terms }) =>
        console.table({ name, email, password, terms }),
      )}
    >
      <Center mb={rem(18)}>
        <Text size={rem(12)} fw={500}>
          {type === 'signup'
            ? upperFirst('signup to create account')
            : type === 'login'
            ? upperFirst('login to exist account')
            : null}
        </Text>
      </Center>

      <Stack>
        {type === 'signup' ? (
          <TextInput
            label='Name'
            placeholder='Your name'
            value={form.values.name}
            onChange={event =>
              form.setFieldValue('name', event.currentTarget.value)
            }
          />
        ) : null}

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

        {type === 'signup' ? (
          <Checkbox
            label='I accept terms and conditions'
            checked={form.values.terms}
            onChange={event =>
              form.setFieldValue('terms', event.currentTarget.checked)
            }
          />
        ) : null}
      </Stack>

      <Group justify='space-between' mt='md' wrap='nowrap'>
        <Anchor
          component='button'
          type='button'
          c='dimmed'
          size='xs'
          underline='never'
          onClick={() => toggle()}
        >
          {type === 'signup'
            ? upperFirst('already have an account? Login')
            : type === 'login'
            ? upperFirst('dont have an account? Signup')
            : null}
        </Anchor>

        <Button type='submit' variant='default' radius='xl'>
          {upperFirst(type)}
        </Button>
      </Group>
    </form>
  );
};

export default RegisterWithForm;
