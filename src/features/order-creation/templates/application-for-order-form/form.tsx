import { useFormik } from 'formik'
import { IApplicationFromBackend } from '../../../../api/application-creation/types'
import { Client } from 'shared/ui/form-sections'
import { Vehicle } from 'shared/ui/form-sections'
import { Issues } from 'shared/ui/form-sections'
import { FormWrapper, Form, ApplicationInfoSection } from './styled'

type PrepareOrderFormProps = {
  fields: IApplicationFromBackend
}

export const ApplicationForOrderForm = ({
  fields,
}: PrepareOrderFormProps): JSX.Element => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit: (values) => {},
  })

  return (
    <FormWrapper>
      <Form>
        <ApplicationInfoSection>
          <Client formik={formik} headerColor={'#000'} disabled={true} />
          <Vehicle formik={formik} headerColor={'#000'} disabled={true} />
        </ApplicationInfoSection>
        <Issues formik={formik} headerColor={'#000'} disabled={true} />
      </Form>
    </FormWrapper>
  )
}
