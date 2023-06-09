import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

export interface DataTableItem {
  name: string;
  birth_year: string;
  gender: string;
  climate: string;
  population: string;
  model: string;
  manufacturer: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  fetchPeopleData(): Observable<DataTableItem[]> {
    return this.fetchAllPages('https://swapi.dev/api/people/');
  }

  fetchPlanetsData(): Observable<DataTableItem[]> {
    return this.fetchAllPages('https://swapi.dev/api/planets/');
  }

  fetchStarshipsData(): Observable<DataTableItem[]> {
    return this.fetchAllPages('https://swapi.dev/api/starships/');
  }

  private fetchAllPages(url: string): Observable<DataTableItem[]> {
    return this.http.get<{ results: any[], next: string }>(url).pipe(
      switchMap(({ results, next }) => {
        const items = results.map((result: any) => ({
          name: result.name,
          birth_year: result.birth_year,
          gender: result.gender,
          climate: result.climate,
          population: result.population,
          model: result.model,
          manufacturer: result.manufacturer
        } as DataTableItem));

        if (next) {
          return this.fetchAllPages(next).pipe(
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
