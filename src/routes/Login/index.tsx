import { SubmitHelpers } from '@area2k/use-form'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'

import styled from '@/styles'

import Button from '@/elements/Button'
import Link from '@/elements/Link'
import Text from '@/elements/Text'

import Card from '@/components/Card'
import SingleColumnLayout from '@/components/SingleColumnLayout'
import Version from '@/components/Version'

import Form from '@/form'
import FormFooter from '@/form/FormFooter'
import TextField from '@/form/TextField'
import Stack from '@/components/Stack'
import { Body, Display } from '@/components/Typography'

const Wrapper = styled('div', {
  padding: '64px 0'
})

type FormValues = { email: string, password: string }

const initialValues: FormValues = { email: '', password: '' }

const Login = () => {
  const handleSubmit = useCallback(async (values: FormValues, { setFormError }: SubmitHelpers) => {
    console.log('submit:', values)
    setFormError('testError', {
      icon: faExclamationTriangle,
      message: 'Your email address or password is incorrect.',
      title: 'Incorrect login'
    })
  }, [])

  return (
    <SingleColumnLayout size='sm'>
      <Wrapper>
        <Stack vertical gap={24}>
          <div style={{ padding: '0 12.5% 16px', width: '100%', textAlign: 'center' }}>
            <Display>
              Logo Image
            </Display>
          </div>
          <Card
            title='Sign in'
          >
            <Card.Section>
              <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                <TextField
                  autoFocus
                  required
                  fieldId='email'
                  label='Email address'
                  placeholder='Email address'
                  type='email'
                />
                <TextField
                  required
                  css={{ letterSpacing: '2px' }}
                  fieldId='password'
                  label='Password'
                  placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                  type='password'
                />
                <FormFooter>
                  <Link to='/forgot-password'>
                    Forgot password?
                  </Link>
                  <Button>
                    Sign in
                  </Button>
                </FormFooter>
              </Form>
            </Card.Section>
            <Card.Section subdued>
              <Stack justify='center'>
                <Body>
                  Need an account?
                </Body>
                <Link to='/signup'>
                  Sign up here
                </Link>
              </Stack>
            </Card.Section>
          </Card>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Version size='sm' />
          </div>
        </Stack>
      </Wrapper>
    </SingleColumnLayout>
  )
}

export default Login
