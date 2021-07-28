import { FC } from 'react'
import { useFormik } from 'formik'
import { Button } from 'antd'
import { onClose } from 'lib/application-form-modal'
import { addApplication } from '../model'
import { Vehicle, Client, Issues } from 'shared/ui/form-sections'
import {
  ButtonSection,
  FormWrapper,
  Form,
} from 'shared/ui/form-sections/styled'

type AddApplicationFormPropsType = {
  fields: any
  closable?: boolean
  submitionText: string
}

export const AddApplicationForm: FC<AddApplicationFormPropsType> = ({
  fields,
  submitionText,
  closable,
}) => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit: (values) => {
      addApplication(values)

      formik.resetForm()

      if (closable) {
        onClose()
      }
    },
  })

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Vehicle formik={formik} headerColor={'#fff'} />
        <Issues formik={formik} headerColor={'#fff'} />

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
