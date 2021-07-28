import { FC } from 'react'
import { useFormik } from 'formik'
import { Button } from 'antd'
import {
  FormWrapper,
  Form,
  ButtonSection,
} from 'shared/ui/form-sections/styled'
import { onClose } from 'lib/application-form-modal'
import { ApplicationFormType } from 'shared/api/application/types'
import { createApplication } from '../model'
import { Client, Vehicle, Issues } from 'shared/ui/form-sections'

type CreateApplicationFormPropsType = {
  fields: ApplicationFormType
  closable?: boolean
  submitionText: string
}

export const CreateApplicationForm: FC<CreateApplicationFormPropsType> = ({
  fields,
  submitionText,
  closable,
}) => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit: (values) => {
      createApplication(values)

      formik.resetForm()

      if (closable) {
        onClose()
      }
    },
  })

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Client formik={formik} headerColor={'#fff'} />
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
