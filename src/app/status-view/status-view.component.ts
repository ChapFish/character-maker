import { Component, OnInit } from '@angular/core';
import { Searcher } from '../searcher';
import { SearcherService } from '../searcher.service';

@Component({
  selector: 'app-status-view',
  templateUrl: './status-view.component.html',
  styleUrls: ['./status-view.component.scss']
})
export class StatusViewComponent implements OnInit {

  searcher: Searcher;

  constructor(private searcherService: SearcherService) { }

  ngOnInit() {
    this.getSearcher();
  }

  getSearcher(): void{
    this.searcher = this.searcherService.getSearcher();
  }


}
