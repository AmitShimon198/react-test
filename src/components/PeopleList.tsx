import React, { FunctionComponent } from 'react'
import Flag from './Flag';
import { People } from 'DataApi/people.interface';

interface PeopleListProps {
    peoples: People[];
}
const PeopleList: FunctionComponent<PeopleListProps> = ({ peoples }) => {

    return (
        <>
            {peoples.map(({ first_name, last_name, country, id }) => (
                <div key={id}>
                    <p>{first_name} {last_name}</p>
                    <Flag countryCode={country} />
                </div>))
            }
        </>
    )
}

export default PeopleList;
