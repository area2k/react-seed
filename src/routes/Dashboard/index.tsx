import { FieldErrorMap, SubmitHelpers } from '@area2k/use-form'
import useModal from '@area2k/use-modal'
import { faBan, faCaretDown, faCheck, faChevronDown, faCog, faEllipsisH, faEllipsisV, faExclamationCircle, faInfoCircle, faPen, faQuestionCircle, faSignOutAlt, faStar, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { isValidElement } from 'react'

import styled from '@/styles'

import ButtonGroup from '@/elements/ButtonGroup'
import Icon from '@/elements/Icon'
import Table, { TableCell, TableHead, TableHeading, TableRow } from '@/elements/Table'
import Text from '@/elements/Text'

import Button from '@/components/Button'
import Card from '@/components/Card'
import Modal from '@/components/Modal'
import Page from '@/components/Page'
import SingleColumnLayout from '@/components/SingleColumnLayout'
import Tooltip from '@/components/Tooltip'
import { Display, Body as BodyText, Heading as HeadingText, Subheading, Title, Small } from '@/components/Typography'

import Form from '@/form'
import FormColumns from '@/form/FormColumns'
import FormFooter from '@/form/FormFooter'
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
import Stack from '@/components/Stack'
import Alert from '@/components/Alert'
import Tag from '@/components/Tag'

const CustomLink = styled(Link, { color: 'red' })

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
      <Card.Section>
        Test
      </Card.Section>
    </Modal>
  ))

  const handleSubmit = async (values: FormValues) => {
    console.log('submit:', values)
  }

  return (
    <Page
      primaryAction={{ a11yLabel: 'Create new', icon: faCheck, label: 'Create new', onAction: () => {} }}
      secondaryActions={[{ a11yLabel: 'More actions', label: 'More', onAction: () => {} }]}
      size='md'
      title='Dashboard'
    >
      <Stack vertical gap={18}>
        <Card sectioned title='Testing modals'>
          <Stack>
            <Tag label='Customer enabled' onRemove={console.log} />
            <Tag label='Tagged with critical' onRemove={console.log} />
            <Button a11yLabel='Open modal' onClick={() => showModal()} />
          </Stack>
        </Card>
        <Card sectioned title='Testing tooltips'>
          <Stack vertical gap={20}>
            <div style={{ width: '100%' }}>
              <Alert
                description='Something has gone wrong with your tooltips.'
                icon={faExclamationCircle}
                status='warning'
                title='Tooltip problem'
              />
            </div>
            <Tooltip
              align='middle'
              justify='outside-right'
              id='tooltip-test'
              text='Button disengaged for your safety'
            >
              <Button appearance='outline' a11yLabel='Show tooltip' />
            </Tooltip>
          </Stack>
        </Card>
        <Card sectioned title='Testing dropdown menu'>
          <ButtonGroup>
            <Dropdown
              align='below'
              id='dropdown-test'
              Content={
                () => (
                  <>Hello world</>
                )
              }
            >
              <Button appearance='outline' a11yLabel='Show filters' />
            </Dropdown>
            <Button appearance='outline' a11yLabel='Save settings' />
            <DropdownMenu
              align='below'
              actions={[
                [
                  { a11yLabel: 'My profile', icon: faUser, label: 'My profile', onAction: () => console.log('account') },
                  { a11yLabel: 'My stars', icon: faStar, label: 'My stars', onAction: () => console.log('stars') },
                  { a11yLabel: 'Settings', icon: faCog, label: 'Settings', onAction: () => console.log('settings') },
                ],
                [
                  { a11yLabel: 'Sign out', icon: faSignOutAlt, label: 'Sign out', onAction: () => console.log('signout') }
                ]
              ]}
              id='dropdown-menu-test'
            >
              <Button
                a11yLabel='Show dropdown menu'
                appearance='outline'
                status='danger'
              />
            </DropdownMenu>
          </ButtonGroup>
        </Card>
        <Card title='Table content'>
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
        <Card sectioned title='Form engine'>
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
              options={[
                { label: 'Option 1', value: 'opt1' },
                { label: 'Option 2', value: 'opt2' },
                { label: 'Option 3', value: 'opt3' }
              ]}
              placeholder='Select an option...'
            />
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
                a11yLabel='Submit'
                iconLeft={faCheck}
                type='submit'
              />
            </FormFooter>
          </Form>
        </Card>
      </Stack>
    </Page>
  )
}

export default Dashboard
