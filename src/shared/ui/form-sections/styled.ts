import styled from 'styled-components'

export const ClientSection = styled.div`
  margin-bottom: 2rem;
`

export const SectionHeader = styled.h2<{ headerColor: string }>`
  color: ${(props) => props.headerColor};
  margin-bottom: 0.5rem;
`

export const VehicleSection = styled.div`
  margin-bottom: 1rem;
  color: #fff;
`

export const IssuesSection = styled.div`
  margin-bottom: 2rem;
`

export const GridFields = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 237.5px 237.5px;
  grid-column-end: auto;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
`
export const FormWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0 auto;
`

export const Form = styled.form`
  width: 500px;
  margin: 0 auto;
`

export const ButtonSection = styled.div`
  text-align: right;
`
