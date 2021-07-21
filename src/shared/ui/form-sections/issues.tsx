import { FC } from 'react'
import { Input } from 'antd'
import { IssuesSection, SectionHeader } from './styled'

const { TextArea } = Input

type VehicleSectionPropsType = {
  formik: any
  headerColor: string
  disabled?: boolean
}

export const Issues: FC<VehicleSectionPropsType> = ({
  formik,
  headerColor,
  disabled,
}) => {
  return (
    <IssuesSection>
      <SectionHeader headerColor={headerColor}>
        Описание неисправностей
      </SectionHeader>
      <TextArea
        rows={4}
        id='description'
        name='issues.description'
        placeholder='Описание'
        onChange={formik.handleChange}
        value={formik.values.issues.description}
        style={{ width: '492px', maxHeight: '120px' }}
        disabled={disabled}
      />
    </IssuesSection>
  )
}
