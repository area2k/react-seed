import { FieldErrorMap, SubmitHelpers } from '@area2k/use-form'
import useModal from '@area2k/use-modal'
import { faBan, faCheck, faChevronDown, faCog, faQuestionCircle, faSignOutAlt, faStar, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons'

import styled from '@/styles'

import Card, { Body, Heading } from '@/elements/Card'
import FormFooter from '@/elements/FormFooter'
import Icon from '@/elements/Icon'
import Table, { TableCell, TableHead, TableHeading, TableRow } from '@/elements/Table'
import Text from '@/elements/Text'

import Button from '@/components/Button'
import LoadingButton from '@/components/LoadingButton'
import Modal from '@/components/Modal'
import SingleColumnLayout from '@/components/SingleColumnLayout'
import Tooltip from '@/components/Tooltip'
import { Display, Body as BodyText, Heading as HeadingText, Subheading, Title, Small } from '@/components/Typography'

import Form from '@/form'
import FormColumns from '@/form/FormColumns'
import MaskedInputField from '@/form/MaskedInputField'
import MultiOptionGroupField from '@/form/MultiOptionGroupField'
import OptionField from '@/form/OptionField'
import SingleOptionGroupField from '@/form/SingleOptionGroupField'
import TextField from '@/form/TextField'
import TextSelectField from '@/form/TextSelectField'
import { useState } from 'react'
import Popover from '@/components/Popover'
import DropdownMenu from '@/components/DropdownMenu'
import Dropdown from '@/components/Dropdown'

type FormValues = {
  checkboxGroup: string[]
  radioGroup: string
  masked: string
  switch: boolean
  text: string
  textSelect: string
}

const initialValues: FormValues = {
  checkboxGroup: ['check2'], radioGroup: '', masked: '', switch: false, text: '', textSelect: ''
}

const Dashboard = () => {
  const [showModal, hideModal] = useModal(() => (
    <Modal title='Test modal' onRequestClose={hideModal}>
      <div style={{ padding: '2rem' }}>
        Test
      </div>
    </Modal>
  ))

  const handleSubmit = async (values: FormValues) => {
    console.log('submit:', values)
  }

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <Text size='xxl' weight='semibold'>
          Dashboard
        </Text>
      </div>
      <SingleColumnLayout>
        <Card>
          <Heading>
            <Subheading>
              Testing modals
            </Subheading>
          </Heading>
          <Body>
            <Button text='Open modal' onClick={() => showModal()} />
          </Body>
        </Card>
        <Card css={{ marginTop: '32px' }}>
          <Heading>
            <Subheading>
              Testing tooltips
            </Subheading>
          </Heading>
          <Body>
            <Tooltip
              align='middle'
              justify='outside-right'
              id='tooltip-test'
              text='Click the button, it does nothing'
            >
              <Button text='Show tooltip' />
            </Tooltip>
          </Body>
        </Card>
        <Card css={{ marginTop: '32px' }}>
          <Heading>
            <Subheading>
              Testing dropdown menu
            </Subheading>
          </Heading>
          <Body>
            <Dropdown
              align='below'
              id='dropdown-test'
              Content={
                () => (
                  <>Hello world</>
                )
              }
            >
              <Button appearance='secondary' status='theme' text='Show filters' />
            </Dropdown>
            <DropdownMenu
              align='below'
              id='dropdown-menu-test'
              items={[
                [
                  { icon: faUser, text: 'My profile', onClick: () => console.log('account') },
                  { icon: faStar, text: 'My stars', onClick: () => console.log('stars') },
                  { icon: faCog, text: 'Settings', onClick: () => console.log('settings') },
                ],
                [
                  { icon: faSignOutAlt, text: 'Sign out', onClick: () => console.log('signout') }
                ]
              ]}
            >
              <Button
                appearance='secondary'
                status='neutral'
                text='Show dropdown menu'
              />
            </DropdownMenu>
          </Body>
        </Card>
        <Card css={{ marginTop: '2rem' }}>
          <Heading>
            <Subheading>
              Table content
            </Subheading>
          </Heading>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeading style={{ width: '40%' }}>
                  Name
                </TableHeading>
                <TableHeading style={{ width: '40%' }}>
                  Email
                </TableHeading>
                <TableHeading style={{ width: '20%' }}>
                  Admin?
                </TableHeading>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableCell>
                  Andrew Rempe
                </TableCell>
                <TableCell>
                  arempe@area2k.com
                </TableCell>
                <TableCell>
                  Yes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Eric Ashman
                </TableCell>
                <TableCell>
                  eashman@area2k.com
                </TableCell>
                <TableCell>
                  Yes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Bill Story
                </TableCell>
                <TableCell>
                  bstory@area2k.com
                </TableCell>
                <TableCell>
                  No
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </Card>
        <Card css={{ marginTop: '2rem' }}>
          <Heading>
            <Subheading>
              Form elements
            </Subheading>
          </Heading>
          <Body>
            <Form
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              <TextField
                fieldId='text'
                label='Text field'
                placeholder='Text content'
              />
              <TextSelectField
                fieldId='textSelect'
                label='Text select field'
                placeholder='Select an option...'
              >
                <option value='opt1'>Option 1</option>
                <option value='opt2'>Option 2</option>
                <option value='opt3'>Option 3</option>
              </TextSelectField>
              <OptionField
                appearance='switch'
                fieldId='switch'
                label='Switch field'
              />
              <FormColumns>
                <SingleOptionGroupField
                  fieldId='radioGroup'
                  label='Select the most important radio:'
                  options={[
                    { label: 'Radio 1', value: 'radio1' },
                    { label: 'Radio 2', value: 'radio2' },
                    { label: 'Radio 3', value: 'radio3', disabled: true },
                  ]}
                />
                <MultiOptionGroupField
                  fieldId='checkboxGroup'
                  label='Select all that apply:'
                  options={[
                    { label: 'Checkbox 1', value: 'check1' },
                    { label: 'Checkbox 2', value: 'check2', disabled: true },
                    { label: 'Checkbox 3', value: 'check3' }
                  ]}
                />
              </FormColumns>
              <MaskedInputField
                required
                fieldId='masked'
                label='Phone number'
                mask='(000) 000-0000'
                placeholder='Enter phone number'
              />
              <FormFooter>
                <Button
                  iconLeft={faCheck}
                  text='Submit'
                  type='submit'
                />
              </FormFooter>
            </Form>
          </Body>
        </Card>
      </SingleColumnLayout>
    </>
  )
}

export default Dashboard
