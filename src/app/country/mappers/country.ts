import type { Country } from '../interfaces/country';
import type { RESTCountryObject } from '../interfaces/rest-countries';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountryObject): Country {
    return {
      uuid: restCountry.uuid,
      flag: {
        emoji: restCountry.flag.emoji,
        url_svg: restCountry.flag.url_svg,
      },
      name: restCountry.names.common,
      capitals: restCountry.capitals.map((capital) => capital.name).join(', '),
      population: restCountry.population,
    };
  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountryObject[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
