import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileName: any = "";
  pokemonDetails: any = "";
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.profileName = this.activateRoute.snapshot.paramMap.get('name');
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.profileName)
    .subscribe(res => this.pokemonDetails = res);
   }

}
