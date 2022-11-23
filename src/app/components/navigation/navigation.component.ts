import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  title: string = 'angular learn';

  constructor() { }

  ngOnInit(): void {
  }

}
