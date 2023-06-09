import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface DataTableItem {
  name: string;
  field1: string;
  field2: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  fetchPeopleData(): Observable<DataTableItem[]> {
    return this.http.get<{ results: any[] }>('https://swapi.dev/api/people/').pipe(
      map(({ results }) =>
        results.map((person: any) => ({
          name: person.name,
          field1: person.birth_year,
          field2: person.gender
        }) as DataTableItem)
      ),
      catchError(() => of([]))
    );
  }

  fetchPlanetsData(): Observable<DataTableItem[]> {
    return this.http.get<{ results: any[] }>('https://swapi.dev/api/planets/').pipe(
      map(({ results }) =>
        results.map((planet: any) => ({
          name: planet.name,
          field1: planet.climate,
          field2: planet.population
        }) as DataTableItem)
      ),
      catchError(() => of([]))
    );
  }

  fetchStarshipsData(): Observable<DataTableItem[]> {
    return this.http.get<{ results: any[] }>('https://swapi.dev/api/starships/').pipe(
      map(({ results }) =>
        results.map((starship: any) => ({
          name: starship.name,
          field1: starship.model,
          field2: starship.manufacturer
        }))
      ),
      catchError(() => of([]))
    );
  }
  
}
