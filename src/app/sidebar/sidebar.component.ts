import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedStatus = [true, false, false, false];

  onSelect(item: number): boolean {
    return this.selectedStatus[item];
  }
  selecting(item: number): void{
    this.selectedStatus = [false, false, false, false];
    this.selectedStatus[item] = true;
  }

}
