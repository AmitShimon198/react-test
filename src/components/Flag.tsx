import React, { FunctionComponent, useContext } from 'react'
import { CountryContext } from './CountryContext';
interface FlagProps {
    countryCode: string;
}
const Flag: FunctionComponent<FlagProps> = ({ countryCode }) => {
    const { countriesObject } = useContext(CountryContext)
    const flagSrc = countriesObject[countryCode]?.flag;
    return (
        <img className="flag" height={50} src={flagSrc} alt={countryCode} />
    )
}

export default Flag;
