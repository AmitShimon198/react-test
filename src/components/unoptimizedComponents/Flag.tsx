import { FunctionComponent, useContext } from 'react'
import { CountryContext } from '../CountryContext';

interface FlagProps {
    countryCode: string;
}
const Flag: FunctionComponent<FlagProps> = ({ countryCode }) => {
    const { getCountryByAlpha2Code } = useContext(CountryContext);
    const country = getCountryByAlpha2Code({ alpha2Code: countryCode })
    if (!country?.alpha2Code) return null;

    return (
        <img className="flag" height={50} src={`https://flagsapi.com/${country?.alpha2Code}/shiny/64.png`} alt={countryCode} />
    )
}

export default Flag;
