import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import type { Country } from '../interfaces/country';
import { RESTCountry } from '../interfaces/rest-countries';
import { CountryMapper } from '../mappers/country';

@Service()
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http
      .get<RESTCountry>(`${environment.restCountriesApi}?capitals=${query}`)
      .pipe(
        map((restCountry) =>
          CountryMapper.mapRestCountryArrayToCountryArray(restCountry.data.objects),
        ),
      );
  }
}
