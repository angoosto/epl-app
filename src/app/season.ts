import { Club } from './club';
import { Player } from './player';

export class Season{
    startYear:number;
    topScorers:Player[];
    topAssists:Player[];
    winner:Club;
    relegated:Club[];
}