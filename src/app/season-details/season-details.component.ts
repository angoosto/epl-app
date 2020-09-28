import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { SeasonService } from '../season.service';
import { Season } from '../season';
import { Club } from '../club';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
export class SeasonDetailsComponent implements OnInit {
  topScorers:Player[] = [];
  topAssists:Player[] = [];
  winner:Club;
  relegated:Club[] = [];

  constructor(private ss:SeasonService) { }

  selectedSeason:Season = {
    startYear: null,
    topScorers:[],
    topAssists:[],
    relegated:[],
    winner:null
  };
  seasons:Season[] = this.ss.getSeasons();

  setSeason() {
    this.topScorers = this.ss.getTopScorers(this.selectedSeason.startYear);
    this.topAssists = this.ss.getTopAssists(this.selectedSeason.startYear);
    this.winner = this.ss.getWinner(this.selectedSeason.startYear);
    this.relegated = this.ss.getRelegated(this.selectedSeason.startYear);
  }

  ngOnInit(): void {
    this.selectedSeason.startYear = 2019;
    this.setSeason();
  }

}
