import { useFormik } from 'formik'
import { Button } from 'antd'
import { saveChanges } from '../index'
import {
  FormWrapper,
  Form,
  ButtonSection,
} from 'shared/ui/form-sections/styled'
import { Issues, Client, Vehicle } from 'shared/ui/form-sections'
import { ApplicationType } from 'shared/api/application'

type EditApplicationFormPropsType = {
  fields: ApplicationType
  submitionText: string
}

export const EditApplicationForm = ({
  fields,
  submitionText,
}: EditApplicationFormPropsType): JSX.Element => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit: (values) => {
      saveChanges(values)
    },
  })

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Client formik={formik} headerColor={'#000'} />
        <Vehicle formik={formik} headerColor={'#000'} />
        <Issues formik={formik} headerColor={'#000'} />

        <ButtonSection>
          <Button
            htmlType='submit'
            style={{ width: '200px', fontSize: '18px', fontWeight: 'bolder' }}
            type='primary'
            size='large'
          >
            {submitionText}
          </Button>
        </ButtonSection>
      </Form>
    </FormWrapper>
  )
}
