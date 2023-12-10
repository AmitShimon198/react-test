import { Country } from 'DataApi/country.interface';
import React, { useEffect, FunctionComponent, useState } from 'react';
import countryService from 'services/country.service';
import { CountryContext } from './CountryContext';

const CountryContextProvider: FunctionComponent = ({ children }) => {
    const [countriesObject, setCountriesObject] = useState<{ [key: string]: Country }>({})
    useEffect(() => {
        const initData = async () => {
            const { countriesObject: countriesObjectFromService } = await countryService.getAndMapCountries();
            setCountriesObject(countriesObjectFromService)
        }
        initData();
    }, [])

    return (
        <CountryContext.Provider
            value={{
                countriesObject
            }}
        >
            {children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider;
