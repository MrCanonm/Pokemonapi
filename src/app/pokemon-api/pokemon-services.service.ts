import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {

  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonData():Observable<any>{
    return this.http.get(this.url);
  }
}
