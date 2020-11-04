import useModal from '@area2k/use-modal'

import Button from '@/elements/Button'
import Card, { Body, Heading } from '@/elements/Card'
import FormFooter from '@/elements/FormFooter'
import Text from '@/elements/Text'

import Modal from '@/components/Modal'
import Popover from '@/components/Popover'
import SingleColumnLayout from '@/components/SingleColumnLayout'

import Form from '@/form'
import FormColumns from '@/form/FormColumns'
import RadioGroupField from '@/form/RadioGroupField'
import SwitchField from '@/form/SwitchField'
import TextField from '@/form/TextField'
import TextSelectField from '@/form/TextSelectField'

type FormValues = {
  radioGroup: string
  switch: boolean
  text: string
  textSelect: string
}

const initialValues: FormValues = {
  radioGroup: 'radio2', switch: false, text: '', textSelect: ''
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
              >
                <option disabled value=''>Select an option...</option>
                <option value='opt1'>Option 1</option>
                <option value='opt2'>Option 2</option>
                <option value='opt3'>Option 3</option>
              </TextSelectField>
              <SwitchField fieldId='switch' label='Switch field' />
              <RadioGroupField
                disabled
                required
                fieldId='radioGroup'
                label='Select the most important radio:'
                options={[
                  { label: 'Radio 1', value: 'radio1' },
                  { label: 'Radio 2', value: 'radio2' },
                  { label: 'Radio 3', value: 'radio3' },
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
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Button>
                Open up
              </Button>
              <Popover align='below' isOpen={true} onRequestClose={() => console.log('close dropdown')}>
                <div style={{ padding: '4rem' }}>
                  dropdown menu
                </div>
              </Popover>
            </div>
          </Body>
        </Card>
      </SingleColumnLayout>
    </>
  )
}

export default Dashboard
