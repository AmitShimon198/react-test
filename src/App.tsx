import { getPeople } from "DataApi";
import { GetPeopleResponse } from "DataApi/people.interface";
import PeopleList from "components/PeopleList";
import SearchPeople from "components/SearchPeople";
import { debounce } from "lodash";
import { useCallback, useRef, useState, FunctionComponent, useMemo } from "react";

const initialValue = {
  searchResultCount: 0,
  searchResults: [],
  totalResultCounter: 0
}
const App: FunctionComponent = () => {

  const ref = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<GetPeopleResponse>(initialValue);

  const { searchResultCount,
    searchResults: peoples,
    totalResultCounter } = searchResults

  const onChangeHandler = useCallback(async () => {
    if (!!ref.current?.value) {
      const data = await getPeople({ search: ref.current?.value });
      setSearchResults(data)
    } else {
      setSearchResults(initialValue)
    }
  }, [])

  const handleChange = useMemo(() => debounce(onChangeHandler, 300), [onChangeHandler]);

  return (
    <>
      <div className="pageWrapper">
        <p>Search Component</p>
        <SearchPeople ref={ref} handleChange={handleChange} />
        <p>List Component</p>

        {!!peoples?.length && <div className="listWrapper">
          <PeopleList peoples={peoples} />
        </div>
        }
        <p>Found results: {searchResultCount}</p>
        <p>Total results: {totalResultCounter}</p>
      </div>
    </>
  );
};

export default App;
