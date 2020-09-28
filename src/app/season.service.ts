import { Injectable } from '@angular/core';

import { Club } from './club';
import { Player } from './player';
import { Season } from './season';
import { SEASONS } from './seasonData';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor() { }

  getSeasons():Season[] {
    return SEASONS;
  }

  getTopScorers(startingYear:number):Player[] {
    return SEASONS.find(season => season.startYear===startingYear).topScorers;
  }

  getTopAssists(startingYear:number):Player[] {
    return SEASONS.find(season => season.startYear===startingYear).topAssists;
  }

  getWinner(startingYear:number):Club {
    return SEASONS.find(season => season.startYear===startingYear).winner;
  }

  getRelegated(startingYear:number):Club[] {
    return SEASONS.find(season => season.startYear===startingYear).relegated;
  }
}
