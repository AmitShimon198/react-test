import { debounce } from "lodash";
import PeopleList from "./PeopleList";
import SearchPeople from "./SearchPeople";
import { useRef, useState } from "react";
import { GetPeopleResponse } from "DataApi/people.interface";
import { getPeople } from "DataApi";

const initialValue = {
    searchResultCount: 0,
    searchResults: [],
    totalResultCounter: 0
}

export const NotOptimizedContainer = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [searchResults, setSearchResults] = useState<GetPeopleResponse>(initialValue);
    const {
        searchResultCount,
        searchResults: peoples,
        totalResultCounter
    } = searchResults;

    const onChangeHandler = async () => {
        if (!!ref.current?.value) {
            const getPeopleResponse = await getPeople({ search: ref.current?.value });
            setSearchResults(getPeopleResponse)
        } else {
            setSearchResults(initialValue)
        }
    }

    const handleChange = debounce(onChangeHandler, 300);

    return <div className="pageWrapper">
        <h3> Not Optimized list</h3>
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