import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

export interface DataTableItem {
  fetchCategory: string;

  name: string;

  birth_year: string;
  gender: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;

  climate: string;
  population: string;
  diameter: string;
  gravity: string;
  surface_water: string;
  terrain: string;

  model: string;
  manufacturer: string;
  starship_class: string;
  cost_in_credits: string;
  length: string;
  hyperdrive_rating: string;

}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // calls for search bar

  searchPeopleByName(name: string): Observable<any> {
    const url = `https://swapi.dev/api/people/?search=${name}`;
    return this.http.get<any>(url);
  }

  searchPlanetsByName(name: string): Observable<any> {
    const url = `https://swapi.dev/api/planets/?search=${name}`;
    return this.http.get<any>(url);
  }

  searchStarshipsByName(name: string): Observable<any> {
    const url = `https://swapi.dev/api/starships/?search=${name}`;
    return this.http.get<any>(url);
  }

  // end calls for search bar

  fetchPeopleData(): Observable<DataTableItem[]> {
    return this.fetchPage('https://swapi.dev/api/people/');
  }

  fetchPlanetsData(): Observable<DataTableItem[]> {
    return this.fetchPage('https://swapi.dev/api/planets/');
  }

  fetchStarshipsData(): Observable<DataTableItem[]> {
    return this.fetchPage('https://swapi.dev/api/starships/');
  }

  private fetchPage(url: string): Observable<DataTableItem[]> {
    return this.http.get<{ results: any[]; next: string }>(url).pipe(
      switchMap(({ results, next }) => {
        const items = results.map(
          (result: any) =>
            ({
              name: result.name,
              birth_year: result.birth_year,
              gender: result.gender,
              climate: result.climate,
              population: result.population,
              model: result.model,
              manufacturer: result.manufacturer,
            } as DataTableItem)
        );

        if (next) {
          return this.fetchPage(next).pipe(
            map((nextItems: DataTableItem[]) => [...items, ...nextItems])
          );
        } else {
          return of(items);
        }
      }),
      catchError(() => of([]))
    );
  }
}
