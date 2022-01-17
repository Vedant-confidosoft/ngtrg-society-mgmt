import { persons, Person } from './../data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: Person | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPersonDetails();
  }

  getPersonDetails(){
    const id = parseInt(this.route.snapshot.params['id']) - 1;
    //console.log(id);
    this.person = persons[id];
  }

}
