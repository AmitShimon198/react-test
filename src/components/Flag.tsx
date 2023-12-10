import React, { FunctionComponent, useContext, useMemo } from 'react'
import { CountryContext } from './CountryContext';
import countryService from 'services/country.service';
interface FlagProps {
    countryCode: string;
}
const Flag: FunctionComponent<FlagProps> = ({ countryCode }) => {
    const { getCountryByAlpha2Code } = useContext(CountryContext);
    countryService.getCountryByAlpha2Code({ search: countryCode })
    const country = useMemo(() => getCountryByAlpha2Code({ alpha2Code: countryCode }), [countryCode, getCountryByAlpha2Code]);
    return (
        <img className="flag" height={50} src={country?.flag} alt={countryCode} />
    )
}

export default Flag;
