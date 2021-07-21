import { FC } from 'react'
import { Input } from 'antd'
import { ClientSection, SectionHeader, GridFields } from './styled'

type ClientSectionPropsType = {
  formik: any
  headerColor: string
  disabled?: boolean
}

export const Client: FC<ClientSectionPropsType> = ({
  formik,
  headerColor,
  disabled,
}) => {
  return (
    <ClientSection>
      <SectionHeader headerColor={headerColor}>Клиент</SectionHeader>
      <GridFields>
        <Input
          id='name'
          name='client.name'
          type='text'
          placeholder='Имя'
          onChange={formik.handleChange}
          value={formik.values.client.name}
          disabled={disabled}
        />
        <Input
          id='surname'
          name='client.surname'
          type='text'
          placeholder='Фамилия'
          onChange={formik.handleChange}
          value={formik.values.client.surname}
          disabled={disabled}
        />
        <Input
          id='phoneNumber'
          name='client.phoneNumber'
          type='text'
          placeholder='Номер телефона'
          onChange={formik.handleChange}
          value={formik.values.client.phoneNumber}
          disabled={disabled}
        />
        <Input
          id='email'
          name='client.email'
          type='email'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.client.email}
          disabled={disabled}
        />
      </GridFields>
    </ClientSection>
  )
}
