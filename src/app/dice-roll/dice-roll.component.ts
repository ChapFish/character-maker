import { Component, OnInit } from '@angular/core';
import { Searcher } from '../searcher'
import { SearcherService } from '../searcher.service';


@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent implements OnInit {

  searcher:Searcher;


  constructor(private searcherService: SearcherService) { }

  ngOnInit() {
    this.getSearcher();
  }

  getSearcher(): void {
    this.searcher = this.searcherService.getSearcher();
  }
  
  onClick(): void {
    this.searcherService.setStatus();
    console.log(this.searcher.statusRoll.idea);
  }
}
