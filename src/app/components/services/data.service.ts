import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

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
  
  fetchHomeworld(url: string): Observable<string> {
    return this.http.get<{ name: string }>(url).pipe(
      map(homeworld => homeworld.name),
      catchError(() => of('Unknown')) 
    );
  }
  
  fetchSpecies(speciesUrls: string[]): Observable<string> {
    if (speciesUrls.length === 0) {
      return of('Unknown');
    }
  
    return forkJoin(
      speciesUrls.map((url: string) => this.http.get<{ name: string }>(url).pipe(
        map(species => species.name),
        catchError(() => of('Unknown')) // Handle error if species fetch fails
      ))
    ).pipe(
      map(speciesNames => speciesNames.join(', '))
    );
  }








  fetchPlanetsData(page: number = 1): Observable<DataTableItem[]> {
    return this.http.get<{ results: any[] }>(`https://swapi.dev/api/planets/?page=${page}`).pipe(
      map(({ results }) => results.map(planet => ({
        name: planet.name,
        field1: planet.climate,
        field2: planet.population,
      })))
    );
  }

  fetchStarshipsData(page: number = 1): Observable<DataTableItem[]> {
    return this.http.get<{ results: any[] }>(`https://swapi.dev/api/starships/?page=${page}`).pipe(
      map(({ results }) => results.map(starship => ({
        name: starship.name,
        field1: starship.model,
        field2: starship.manufacturer,
      })))
    );
  }
}
