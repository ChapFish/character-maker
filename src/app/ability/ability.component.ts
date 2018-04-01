import { Component, OnInit } from '@angular/core';
import { Searcher } from '../searcher';
import { SearcherService } from '../searcher.service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {

  searcher: Searcher;
  abilityFromEDU: Number = 0;
  abilityFromINT: Number = 0;
  constructor(public searcherService: SearcherService) { }

  ngOnInit() {
    this.getSearcher();
  }

  getSearcher(): void{
    this.searcher = this.searcherService.getSearcher();
  }

  keyupAbility(value, keyNumber: number, selectedAbility: any[]): void{
    selectedAbility[keyNumber] = (value == "") ? 0 : Number(value);
    selectedAbility[5] = selectedAbility[2]+selectedAbility[3]+selectedAbility[4];
    let usedPoints: Number = 0;
    for (var i = this.searcher.firstAbilities.length - 1; i >= 0; i--) {
      usedPoints = usedPoints + this.searcher.firstAbilities[i][keyNumber];
    }
    for (var i = this.searcher.secondAbilities.length - 1; i >= 0; i--) {
      usedPoints = usedPoints + this.searcher.secondAbilities[i][keyNumber];
    }
    for (var i = this.searcher.battleAbilities.length - 1; i >= 0; i--) {
      usedPoints = usedPoints + this.searcher.battleAbilities[i][keyNumber];
    }
    if (keyNumber == 3) {
      this.abilityFromEDU = usedPoints;
    }else if (keyNumber == 4) {
      this.abilityFromINT = usedPoints;
    }
  }
  keyupAbilityDetail(value, selectedAbility: any[]): void{
    selectedAbility[1] = (value == "") ? "detail" : String(value);
  }
}