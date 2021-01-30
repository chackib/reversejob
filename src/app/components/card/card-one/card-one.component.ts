import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent implements OnInit {

  @Input() header: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
