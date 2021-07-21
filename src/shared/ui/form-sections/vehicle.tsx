import { FC } from 'react'
import { Input } from 'antd'
import { VehicleSection, GridFields, SectionHeader } from './styled'

type VehicleSectionPropsType = {
  formik: any
  headerColor: string
  disabled?: boolean
}

export const Vehicle: FC<VehicleSectionPropsType> = ({
  formik,
  headerColor,
  disabled,
}) => {
  return (
    <VehicleSection>
      <SectionHeader headerColor={headerColor}>Автомобиль</SectionHeader>
      <GridFields>
        <Input
          id='brand'
          name='vehicle.brand'
          type='text'
          placeholder='Марка'
          onChange={formik.handleChange}
          value={formik.values.vehicle.brand}
          disabled={disabled}
        />
        <Input
          id='model'
          name='vehicle.model'
          type='text'
          placeholder='Модель'
          onChange={formik.handleChange}
          value={formik.values.vehicle.model}
          disabled={disabled}
        />

        <Input
          id='yearOfIssue'
          name='vehicle.yearOfIssue'
          type='text'
          placeholder='Год выпуска'
          onChange={formik.handleChange}
          value={formik.values.vehicle.yearOfIssue}
          disabled={disabled}
        />
        <Input
          id='engineSpecification'
          name='vehicle.engineSpecification'
          type='text'
          placeholder='Объем двигателя'
          onChange={formik.handleChange}
          value={formik.values.vehicle.engineSpecification}
          disabled={disabled}
        />
        <Input
          id='registrationNumber'
          name='vehicle.registrationNumber'
          type='text'
          placeholder='Регистрационный номер'
          onChange={formik.handleChange}
          value={formik.values.vehicle.registrationNumber}
          disabled={disabled}
        />
        <Input
          id='VIN'
          name='vehicle.VIN'
          type='text'
          placeholder='VIN номер'
          onChange={formik.handleChange}
          value={formik.values.vehicle.VIN}
          disabled={disabled}
        />
      </GridFields>
    </VehicleSection>
  )
}
