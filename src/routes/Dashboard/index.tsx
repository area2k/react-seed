import { FieldErrorMap, SubmitHelpers } from '@area2k/use-form'
import useModal from '@area2k/use-modal'

import Button from '@/elements/Button'
import Card, { Body, Heading } from '@/elements/Card'
import FormFooter from '@/elements/FormFooter'
import Table, { TableCell, TableHead, TableHeading, TableRow } from '@/elements/Table'
import Text from '@/elements/Text'

import Dropdown, { Content, Trigger } from '@/components/Dropdown'
import Modal from '@/components/Modal'
import SingleColumnLayout from '@/components/SingleColumnLayout'

import Form from '@/form'
import CheckboxGroupField from '@/form/CheckboxGroupField'
import MaskedInputField from '@/form/MaskedInputField'
import RadioGroupField from '@/form/RadioGroupField'
import SwitchField from '@/form/SwitchField'
import TextField from '@/form/TextField'
import TextSelectField from '@/form/TextSelectField'

type FormValues = {
  checkboxGroup: string[]
  radioGroup: string
  masked: string
  switch: boolean
  text: string
  textSelect: string
}

const initialValues: FormValues = {
  checkboxGroup: [], radioGroup: '', masked: '', switch: false, text: '', textSelect: ''
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
            <Text size='lg' weight='medium'>
              Testing modals
            </Text>
          </Heading>
          <Body>
            <Button onClick={() => showModal()}>
              Open up
            </Button>
          </Body>
        </Card>
        <Card css={{ marginTop: '2rem' }}>
          <Heading>
            <Text size='lg' weight='medium'>
              Table content
            </Text>
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
            <Text size='lg' weight='medium'>
              Form elements
            </Text>
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
              <SwitchField fieldId='switch' label='Switch field' />
              <RadioGroupField
                fieldId='radioGroup'
                label='Select the most important radio:'
                options={[
                  { label: 'Radio 1', value: 'radio1' },
                  { label: 'Radio 2', value: 'radio2' },
                  { label: 'Radio 3', value: 'radio3' },
                ]}
              />
              <MaskedInputField
                required
                fieldId='masked'
                label='Phone number'
                mask='(000) 000-0000'
                placeholder='Enter phone number'
              />
              <CheckboxGroupField
                fieldId='checkboxGroup'
                label='Select all that apply:'
                options={[
                  { label: 'Checkbox 1', value: 'check1' },
                  { label: 'Checkbox 2', value: 'check2' },
                  { label: 'Checkbox 3', value: 'check3' }
                ]}
              />
              <FormFooter>
                <Button type='submit'>
                  Submit
                </Button>
              </FormFooter>
            </Form>
          </Body>
        </Card>
        <Card css={{ marginTop: '2rem' }}>
          <Heading>
            <Text size='lg' weight='medium'>
              Testing dropdowns
            </Text>
          </Heading>
          <Body>
            <Dropdown id='test-dropdown'>
              <Trigger>
                <Button>
                  Open up
                </Button>
              </Trigger>
              <Content align='below'>
                <div style={{ padding: '1rem', width: '12rem' }}>
                  dropdown menu
                </div>
              </Content>
            </Dropdown>
          </Body>
        </Card>
      </SingleColumnLayout>
    </>
  )
}

export default Dashboard
