import { Injectable } from '@angular/core';
import { Person } from '../data';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getAll(){
  }

  add(person: Person){
  }

  delete(id: number){
  }

  update(person: Person){
  }
}
