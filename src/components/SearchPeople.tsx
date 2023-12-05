import { DebouncedFunc } from 'lodash';
import React, { forwardRef } from 'react';

interface SearchPeopleProps {
  handleChange: DebouncedFunc<(event: any) => Promise<void>>
}
const SearchPeople = forwardRef<SearchPeopleProps, any>((props: SearchPeopleProps, ref: any) => {
  const { handleChange } = props;
  return (
    <input ref={ref} onChange={handleChange} />
  )
})

export default SearchPeople;
