import { getPeople } from "DataApi";
import { GetPeopleResponse } from "DataApi/people.interface";
import { debounce } from "lodash";
import { useRef, useState, useCallback, useMemo } from "react";
import SearchPeople from "./SearchPeople";
import PeopleList from "./PeopleList";
const initialValue = {
    searchResultCount: 0,
    searchResults: [],
    totalResultCounter: 0
}
export const OptimizedContainer = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [searchResults, setSearchResults] = useState<GetPeopleResponse>(initialValue);
    const {
        searchResultCount,
        searchResults: peoples,
        totalResultCounter
    } = searchResults;

    const onChangeHandler = useCallback(async () => {
        if (!!ref.current?.value) {
            const getPeopleResponse = await getPeople({ search: ref.current?.value });
            setSearchResults(getPeopleResponse)
        } else {
            setSearchResults(initialValue)
        }
    }, [])

    const handleChange = useMemo(() => debounce(onChangeHandler, 300), [onChangeHandler]);

    return <div className="pageWrapper">
        <h3>Optimized list</h3>
        <p>Search Component</p>
        <SearchPeople ref={ref} handleChange={handleChange} />
        <p>List Component</p>
        {!!peoples?.length && <div className="listWrapper">
            <PeopleList peoples={peoples} />
        </div>}
        <p>Found results: {searchResultCount}</p>
        <p>Total results: {totalResultCounter}</p>
    </div>;
}