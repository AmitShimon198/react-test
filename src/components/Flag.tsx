import { getCountries } from 'DataApi';
import { Country } from 'DataApi/country.interface';
import React, { FunctionComponent, useEffect, useState } from 'react'
import countryService from 'services/country.service';
interface FlagProps {
    countryCode: string;
}
const Flag: FunctionComponent<FlagProps> = ({ countryCode }) => {
    const [flagSrc, setFlagSrc] = useState<string>('');
    useEffect(() => {
        const country = countryService.getCountryByText({ search: countryCode });
        if (country?.flag) {
            setFlagSrc(country?.flag)
        }
    }, [])
 
    return (
        <img className="flag" height={50} src={flagSrc} alt={countryCode} />
    )
}

export default Flag;
