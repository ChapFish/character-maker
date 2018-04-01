import { Injectable } from '@angular/core';
import { Searcher } from './searcher';

@Injectable()
export class SearcherService {

  constructor() { }

  searcher = new Searcher;

  getSearcher(): Searcher {
     return this.searcher;
  }
  setStatus(): void {
    this.searcher.status = {
      STR: this.get3d6(), 
      DEX: this.get3d6(), 
      INT: this.get2d6()+6, 
      CON: this.get3d6(), 
      APP: this.get3d6(), 
      POW: this.get3d6(), 
      SIZ: this.get2d6()+6, 
      EDU: this.get3d6()+3};
    this.searcher.status.SAN = this.searcher.status.POW*5;
    this.searcher.statusRoll = {
      idea: this.searcher.status.INT*5,
      luck: this.searcher.status.POW*5,
      knowledge: this.searcher.status.EDU*5
    };
  }

  get3d6(): number {
    const state = (Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1);
    return state;
  }

  get2d6(): number {
   const state = (Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1);
   return state; 
  }

}
