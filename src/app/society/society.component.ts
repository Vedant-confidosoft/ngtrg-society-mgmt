import { Component, OnInit } from '@angular/core';
import { societies } from '../data';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})

export class SocietyComponent implements OnInit {

  societies = societies;

  constructor() {
   }

  ngOnInit(): void {
  }

}
