import { getPeople } from "DataApi";
import { GetPeopleResponse } from "DataApi/people.interface";
import PeopleList from "components/PeopleList";
import SearchPeople from "components/SearchPeople";
import { debounce } from "lodash";
import React, { useCallback, useRef, useState, useEffect } from "react";
import countryService from "services/country.service";
const initialValue = {
  searchResultCount: 0,
  searchResults: [],
  totalResultCounter: 0
}
const App: React.FunctionComponent = () => {
  useEffect(() => {
    countryService.getAndMapCountries();
  }, [])

  const ref = useRef(null);
  const [searchResults, setSearchResults] = useState<GetPeopleResponse>(initialValue);

  const { searchResultCount,
    searchResults: peoples,
    totalResultCounter } = searchResults


  const handleChange = useCallback(debounce(async (event) => {
    ref.current = event.target.value;
    if (!!event.target.value) {
      const data = await getPeople({ search: event.target.value });
      setSearchResults(data)
    } else {
      setSearchResults(initialValue)
    }
  }, 1000), [ref, setSearchResults]);


  return (
    <div className="pageWrapper">
      <p>Search Component</p>
      <SearchPeople ref={ref} handleChange={handleChange} />
      <p>List Component</p>
      {!!peoples?.length && <PeopleList peoples={peoples} />}
      <p>Found results: {searchResultCount}</p>
      <p>Total results: {totalResultCounter}</p>
    </div>
  );
};

export default App;
