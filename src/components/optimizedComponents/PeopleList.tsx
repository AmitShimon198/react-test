import { FunctionComponent } from 'react'
import { People } from 'DataApi/people.interface';
import PeopleItem from './PeopleListItem';

interface PeopleListProps {
    peoples: People[];
}
const PeopleList: FunctionComponent<PeopleListProps> = ({ peoples }) => {

    return (
        <>
            {peoples.map(({ first_name, last_name, country, id }) => (
                <PeopleItem key={id} first_name={first_name} last_name={last_name} country={country} />))
            }
        </>
    )
}

export default PeopleList;
