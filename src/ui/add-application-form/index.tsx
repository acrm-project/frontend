import { FC } from 'react'
import { useFormik } from 'formik'
import { initialValues } from './initial-form-values'
import { createApplication } from '../../lib/create-application'
import { Input } from '../../reusable/input'
import { TextArea } from '../../reusable/textarea'
import { Button } from '../../reusable/button'
import {
  FormWrapper,
  Form,
  ClientSection,
  VehicleSection,
  IssuesSection,
  ButtonSection,
  GridFields,
} from './styled'

export const AddApplicationForm: FC = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      createApplication(values)
    },
  })
  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <ClientSection>
          <h2>Клиент</h2>
          <GridFields>
            <Input
              id='name'
              name='name'
              type='text'
              placeholder='Name'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Input
              id='surname'
              name='surname'
              type='text'
              placeholder='Surname'
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            <Input
              id='phoneNumber'
              name='phoneNumber'
              type='text'
              placeholder='Mobile phone'
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </GridFields>
        </ClientSection>
        <VehicleSection>
          <h2>Автомобиль</h2>
          <GridFields>
            <Input
              id='brand'
              name='brand'
              type='text'
              placeholder='Brand'
              onChange={formik.handleChange}
              value={formik.values.brand}
            />
            <Input
              id='model'
              name='model'
              type='text'
              placeholder='Model'
              onChange={formik.handleChange}
              value={formik.values.model}
            />

            <Input
              id='yearOfIssue'
              name='yearOfIssue'
              type='text'
              placeholder='Year of issue'
              onChange={formik.handleChange}
              value={formik.values.yearOfIssue}
            />
            <Input
              id='engineSpecification'
              name='engineSpecification'
              type='text'
              placeholder='Engine specification'
              onChange={formik.handleChange}
              value={formik.values.engineSpecification}
            />
            <Input
              id='registrationNumber'
              name='registrationNumber'
              type='text'
              placeholder='Registration number'
              onChange={formik.handleChange}
              value={formik.values.registrationNumber}
            />
            <Input
              id='VIN'
              name='VIN'
              type='text'
              placeholder='VIN code'
              onChange={formik.handleChange}
              value={formik.values.VIN}
            />
          </GridFields>
        </VehicleSection>
        <IssuesSection>
          <h2>Описание неисправностей</h2>
          <TextArea
            id='description'
            name='description'
            placeholder='Description'
            onChange={formik.handleChange}
            value={formik.values.description}
            width={'493px'}
          />
        </IssuesSection>
        <ButtonSection>
          <Button type='submit'>Создать заявку</Button>
        </ButtonSection>
      </Form>
    </FormWrapper>
  )
}
