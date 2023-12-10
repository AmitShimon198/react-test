import { getCountries } from "DataApi";
import { Country } from "DataApi/country.interface";
import { keyBy } from "lodash";

class CountryService {
    static instance: CountryService | null = null;
    countriesObject = {};
    countries: Country[] = [];
    constructor() {
        if (CountryService.instance) {
            return CountryService.instance;
        }
        CountryService.instance = this;
    }

    async getAndMapCountries({ search = '' } = {}) {
        const { searchResults } = await getCountries({ search })
        this.countries = searchResults;
        this.countriesObject = keyBy(searchResults, 'alpha2Code');
        return { searchResults, countriesObject: this.countriesObject };
    }

    getCountryByText({ search = '' } = {}) {
        return this.countriesObject[search];
    }
}

const countryService = new CountryService();

export default countryService;