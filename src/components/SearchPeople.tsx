import { DebouncedFunc } from 'lodash';
import { forwardRef } from 'react';

interface SearchPeopleProps {
  handleChange: DebouncedFunc<(event: any) => Promise<void>>
}
const SearchPeople = forwardRef<HTMLInputElement, SearchPeopleProps>((props, ref) => {
  const { handleChange } = props;
  return (
    <input ref={ref} onChange={handleChange} />
  )
})

export default SearchPeople;


