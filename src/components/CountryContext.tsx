import { Country } from 'DataApi/country.interface';
import { createContext } from 'react';
export const CountryContext = createContext<{
    getCountryByAlpha2Code: ({ alpha2Code }: {
        alpha2Code: any;
    }) => Country | undefined
}>({
    getCountryByAlpha2Code: ({ alpha2Code }: {
        alpha2Code: any;
    }) => (undefined)
});