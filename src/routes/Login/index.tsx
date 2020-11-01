import Form, { SubmitHelpers } from '@area2k/use-form'
import { useCallback } from 'react'

import styled from '@/styles'

import Button from '@/elements/Button'
import Card, { Body, Heading } from '@/elements/Card'
import FormFooter from '@/elements/FormFooter'
import Link from '@/elements/Link'
import Text from '@/elements/Text'

import SingleColumnLayout from '@/components/SingleColumnLayout'
import Version from '@/components/Version'

import TextField from '@/form/TextField'

const Wrapper = styled('div', {
  padding: '10vh 0'
})

const VersionWrapper = styled('div', {
  marginTop: '0.75rem',

  textAlign: 'center'
})

type FormValues = { email: string, password: string }

const initialValues: FormValues = { email: '', password: '' }

const Login = () => {
  const handleSubmit = useCallback(async (values: FormValues, { setFormError }: SubmitHelpers) => {
    console.log('submit:', values)
  }, [])

  return (
    <SingleColumnLayout size='sm'>
      <Wrapper>
        <Card>
          <Heading>
            <Text size='lg' weight='bold'>
              Sign in
            </Text>
          </Heading>
          <Body>
            <Form
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              <TextField
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
                <Link appearance='hint' to='/forgot-password'>
                  Forgot password?
                </Link>
                <Button>
                  Sign in
                </Button>
              </FormFooter>
            </Form>
          </Body>
        </Card>
        <VersionWrapper>
          <Version size='sm' />
        </VersionWrapper>
      </Wrapper>
    </SingleColumnLayout>
  )
}

export default Login
