import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

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

  fetchPeopleData(page: number = 1): Observable<DataTableItem[]> {
    return this.http.get<{ results: any[] }>(`https://swapi.dev/api/people/?page=${page}`).pipe(
      switchMap(({ results }) => {
        return forkJoin(
          results.map((person: any) =>
            forkJoin({
              name: of(person.name),
              field1: forkJoin((person.species as string[]).map((url: string) => this.http.get<{ name: string }>(url))).pipe(
                map(species => species.map((s: any) => s.name).join(', '))
              ),
              field2: this.http.get<{ name: string }>(person.homeworld).pipe(map(homeworld => homeworld.name)),
            })
          )
        );
      }),
      tap(data => console.log(data))
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
