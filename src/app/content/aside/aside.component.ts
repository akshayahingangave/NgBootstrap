import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  show = true;

  close() {
    this.show = false;
    setTimeout(() => this.show = true, 3000);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
