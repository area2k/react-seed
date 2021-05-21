import { SubmitHelpers } from '@area2k/use-form'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useMemo } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import useLocationSearch from '@/hooks/useLocationSearch'

import Link from '@/elements/Link'

import Button from '@/components/Button'
import Card from '@/components/Card'
import Page from '@/components/Page'
import Stack from '@/components/Stack'
import { Body, Display } from '@/components/Typography'
import Version from '@/components/Version'

import Form from '@/form'
import FormFooter from '@/form/FormFooter'
import TextField from '@/form/TextField'

import { handleMutationFormError } from '@/util/error'
import ls, { ACCESS_TOKEN_KEY, DEVICE_TOKEN_KEY } from '@/util/localstorage'

type FormValues = { email: string, password: string }

const initialValues: FormValues = { email: '', password: '' }

const Login = () => {
  const navigate = useNavigate()
  const { to } = useLocationSearch()

  const deviceToken = ls.get(DEVICE_TOKEN_KEY)
  const destination = useMemo(() => typeof to === 'string' ? to : '/', [to])

  const handleSubmit = useCallback(async (values: FormValues, { setFormError }: SubmitHelpers) => {
    try {
      // TODO: get result from server for login
      const result = {} as any

      const { accessToken, refreshToken } = result.data!.loginMutationName

      ls.multiSet({ [ACCESS_TOKEN_KEY]: accessToken, [DEVICE_TOKEN_KEY]: refreshToken })

      navigate(destination)
    } catch (err) {
      handleMutationFormError(err, {
        setFormError,
        errorMap: {
          INVALID_LOGIN: () => ({
            icon: faLock,
            title: 'Invalid login',
            message: 'Email address or password is incorrect.',
            status: 'warning'
          }),
          all: (gqlError) => ({
            title: gqlError.name,
            message: gqlError.message,
            status: 'danger'
          })
        }
      })
    }
  }, [])

  if (deviceToken) {
    console.log('redirect bc deviceToken=', deviceToken)
    return <Navigate replace to={destination} />
  }

  return (
    <Page size='xs'>
      <div style={{ padding: '64px 0' }}>
        <Stack vertical gap={24}>
          <div style={{ padding: '0 12.5% 16px', width: '100%', textAlign: 'center' }}>
            <Display>
              Logo image
            </Display>
          </div>
          <Card title='Sign in'>
            <Card.Section>
              <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                <TextField
                  autoFocus
                  required
                  autoComplete='email'
                  fieldId='email'
                  label='Email address'
                  placeholder='Email address'
                  type='email'
                />
                <TextField
                  required
                  autoComplete='current-password'
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
                  <Button a11yLabel='Sign in' />
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
      </div>
    </Page>
  )
}

export default Login
