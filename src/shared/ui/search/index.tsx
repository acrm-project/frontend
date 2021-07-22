import { KeyboardEvent } from 'react'
import { Input, Button } from 'antd'
import { SearchFormWrapper, SearchForm } from './styled'

type SearchProps = {
  searchQuery: string
  changeSearchQuery: (query: string) => void
  trigger: () => void
  placeholderText: string
}

export const Search = ({
  searchQuery,
  trigger,
  changeSearchQuery,
  placeholderText,
}: SearchProps): JSX.Element => {
  const enterPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      trigger()
    }
  }

  return (
    <SearchFormWrapper>
      <SearchForm>
        <Input
          value={searchQuery}
          type='text'
          placeholder={placeholderText}
          style={{ marginRight: '1rem', width: '500px' }}
          onChange={(event) => changeSearchQuery(event.target.value)}
          onKeyPress={enterPressHandler}
        />
        <Button
          disabled={!searchQuery}
          type='primary'
          style={{ width: '200px' }}
          onClick={() => trigger()}
        >
          Поиск
        </Button>
      </SearchForm>
    </SearchFormWrapper>
  )
}
