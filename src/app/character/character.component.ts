import { Component, OnInit } from '@angular/core';
import { Searcher } from '../searcher';
import { SearcherService } from '../searcher.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  searcher: Searcher;
  basicInformation: string[] = ["name", "education", "mentallyIll", "sex", "age"];
  basicInformationLabel: {[key:string]:string} = {name: "探索者名", education: "学位・学歴", mentallyIll: "精神の障害", sex: "性別", age: "年齢"};
  //history（経歴）は別途記載。
  detailInformation: string[] = ["address","description","family","insanity","injury","scar"];
  detailInformationLabel: {[key:string]:string} = {address: "住所", description: "描写", family: "家族・友人", insanity: "狂気の症状", injury: "負傷", scar: "傷跡など"};
  //belongings(装備・所持品)はテキストエリアのため別途記載。
  assetInformation: string[] = ["income","cash","deposit","wealth","estate"];
  assetInformationLabel: {[key:string]:string} = {income: "収入", cash: "手持ちの現金", deposit: "預金", wealth: "資産", estate: "不動産"};
  cthulhuInformation: string[] = ["magicBooks", "artifacts", "spell", "supernaturals"];
  cthulhuInformationLabel: {[key:string]:string} = {magicBooks: "読んだクトゥルフ神話の魔導書", artifacts: "アーティファクト", spell: "呪文", supernaturals: "遭遇した超自然の存在"}

  constructor(private searcherService: SearcherService) { }

  ngOnInit() {
    this.getSearcher();
  }

  getSearcher(): void{
    this.searcher = this.searcherService.getSearcher();
  }
}
