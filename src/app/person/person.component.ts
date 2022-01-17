import { Router, RouterLink, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Person, persons, Society, deletePerson } from '../data';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {


  /*
  PROBLEM!!!!
  the 'persons' used here is very different from the actual persons[] array in data.ts file
  */
  persons = persons;
  person : Person | undefined;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onAddClick(){
    this.person = new Person(
    Person.personCount,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    new Society(1,"patel","patel samaj"));
    persons.push(this.person);
    //set routerlink here
    this.route.navigate(['person/',this.person.id]);
  }

  delete(person: Person){
    //persons.splice[person.id-1,1];
    console.log("delete " + person.id + " " + person.firstname);
    //persons.splice(person.id-1,1);
    // persons.forEach(element => {
    //   if(element.id == person.id)
    //     //remove this element
    // });
    //persons = persons.filter(({id})=>id !== person.id);
    //this.persons = this.persons.filter(({id})=>id !== person.id);
    deletePerson(person);
    this.persons = persons.filter(({id})=>id !== person.id);

  }

  // addPerson(){
  //   persons.push(
  //     {
  //       "id":1,
  //       "firstname":"meet",
  //       "middlename":"sanjaykumar",
  //       "lastname":"patel",
  //       "gender": "male",
  //       "mobile" : "1023564897",
  //       "whatsapp" : "1023564789",
  //       "email" : "meetpatel21199@gmail.com",
  //       "occupation" : "developer",
  //       "address" : "",
  //       "city" : "vadodara",
  //       "area" : "manjalpur",
  //       "state" : "gujarat",
  //       "country" : "India",
  //       "pincode" : "391135",
  //       "dob" : "1-1-1999",
  //       "maritalstatus" : "unmarried",
  //       "dom" : "",
  //       "photo": "photo url...",
  //       "society": new Society(1,"patel","patel samaj")
  //     }
  //   );
  //   this.addNewPerson=false;
  // }

}
