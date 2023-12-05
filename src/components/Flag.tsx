import { getCountries } from 'DataApi';
import { Country } from 'DataApi/country.interface';
import React, { FunctionComponent, useEffect, useState } from 'react'
interface FlagProps {
    countryCode: string;
}
const Flag: FunctionComponent<FlagProps> = ({ countryCode }) => {
    const [flagSrc, setFlagSrc] = useState<string>('');
    useEffect(() => {
        const search = async () => {
            const { searchResults } = await getCountries({ search: countryCode });
            const country = searchResults.find((searchResult: Country) => searchResult?.alpha2Code === countryCode)
            if (country?.flag) {
                setFlagSrc(country?.flag)
            }
        }
        search();
    }, [])

    return (
        <img className="flag" height={50} src={flagSrc} alt={countryCode} />
    )
}

export default Flag;
