import { Component, OnInit } from '@angular/core';
import { Datum, IPlayersNBA } from 'src/app/interfaces/nba.interfaces';
import { ITeams } from 'src/app/interfaces/teams.interfaces';
import { RapidapiService } from 'src/app/services/rapidapi.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  playersNBA : Datum[] = [];
  teamsNBA : any = [];

  informacionNacional : any = [];

  constructor(
    private rapidapi : RapidapiService
  ) { }

  ngOnInit(): void {
    // this.rapidapi.getCities().subscribe( (data : any) => {
    //   console.log(data);
    // });
  
    this.rapidapi.getAllPlayersNBA().subscribe( (data : IPlayersNBA) => {
      this.playersNBA = data.data;
      console.log(this.playersNBA)
    });


    this.rapidapi.getAllTeamsNBA().subscribe( ( data : ITeams ) => {
      this.teamsNBA = data.data;
      console.log(this.teamsNBA);
    });

    this.rapidapi.getInformacionNacional().subscribe( ( data : any ) => {
      console.log(data);
    });
  }


}
