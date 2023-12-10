import React, { useEffect, FunctionComponent, useCallback } from 'react';
import countryService from 'services/country.service';
import { CountryContext } from './CountryContext';

const CountryContextProvider: FunctionComponent = ({ children }) => {
    useEffect(() => {
        countryService.getAndMapCountries();
    }, [])
    const getCountryByAlpha2Code = useCallback(({ alpha2Code }) => countryService.getCountryByAlpha2Code({ search: alpha2Code }), []);

    return (
        <CountryContext.Provider
            value={{
                getCountryByAlpha2Code
            }}
        >
            {children}
        </CountryContext.Provider>
    )
}

export default CountryContextProvider;
