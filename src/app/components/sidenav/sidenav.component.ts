import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  opened: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  log(state: any) {
    console.log(state);
  }
}
