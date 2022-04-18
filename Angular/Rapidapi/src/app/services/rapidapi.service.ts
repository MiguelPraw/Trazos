import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOptions, IPlayersNBA } from '../interfaces/nba.interfaces';
import { ITeams } from '../interfaces/teams.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  optionsNBA : any = {
    params: { page : '0' , per_page : '100' },
    headers : new HttpHeaders ({
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      'X-RapidAPI-Key': '37f18af15bmsha5208b60c12c991p199490jsn43bdda422907'
    })
  }

  optionsFootball : any = {
    headers : new HttpHeaders ({
      'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com',
      'X-RapidAPI-Key': '37f18af15bmsha5208b60c12c991p199490jsn43bdda422907'
    })
  }

  optionsCities : any = {
    headers : new HttpHeaders ({
      'X-RapidAPI-Host' : 'wft-geo-db.p.rapidapi.com',
      'X-RapidAPI-Key'  : '37f18af15bmsha5208b60c12c991p199490jsn43bdda422907'
    })
  }

  constructor(
    private http : HttpClient,
  ){}

  getAllPlayersNBA() : Observable<IPlayersNBA> {

    const options : IOptions = {
      headers : new HttpHeaders ({
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': '37f18af15bmsha5208b60c12c991p199490jsn43bdda422907'
      })
    }

    return this.http.get<IPlayersNBA>('https://free-nba.p.rapidapi.com/players', options );
  }

  getAllTeamsNBA() : Observable<ITeams> {
    const options : IOptions = {
      headers : new HttpHeaders ({
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': '37f18af15bmsha5208b60c12c991p199490jsn43bdda422907'
      })
    }

    return this.http.get<ITeams>( 'https://free-nba.p.rapidapi.com/teams' , options );
  }

  getAllFootball() : any {
    return this.http.get('https://free-football-soccer-videos.p.rapidapi.com/', this.optionsFootball );
  }

  getCities() : any {
    return this.http.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', this.optionsCities );
  }

  getInformacionNacional() : any {
    return this.http.get('https://www.el-tiempo.net/api/json/v2/home');
  }

}
