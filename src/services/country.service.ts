import { getCountries } from "DataApi";
import { Country } from "DataApi/country.interface";
import { keyBy } from "lodash";

class CountryService {
    countriesObject = {};
    countries: Country[] = [];

    async getAndMapCountries({ search = '' } = {}) {
        const { searchResults } = await getCountries({ search })
        this.countries = searchResults;
        this.countriesObject = keyBy(searchResults, 'alpha2Code');
        return { searchResults, countriesObject: this.countriesObject };
    }

    getCountryByAlpha2Code({ search = '' } = {}) {
        return this.countriesObject[search];
    }
}

const countryService = new CountryService();

export default countryService;