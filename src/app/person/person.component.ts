import { Component, OnInit } from '@angular/core';
import { persons } from '../data';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

  persons = persons;

  constructor() { }

  ngOnInit(): void {
  }

}
