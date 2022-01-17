export class Society{
  id: number;
  name: string;
  description: string;

  constructor(id: number,name: string,description: string){
    this.id = id;
    this.name = name;
    this.description = description;
  }

}

export class Person{
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  gender: string;
  mobile: string;
  whatsapp: string;
  email: string;
  occupation: string;//occupation change
  address: string;
  city: string;
  area: string;
  state: string;
  country: string;
  pincode: string;
  dob: string;
  maritalstatus: string;
  dom: string;
  photo: string;
  society: Society;

  constructor(
    id: number,
    firstname: string,
    middlename: string,
    lastname: string,
    gender: string,
    mobile: string,
    whatsapp: string,
    email: string,
    occupation: string,
    address: string,
    city: string,
    area: string,
    state: string,
    country: string,
    pincode: string,
    dob: string,
    maritalstatus: string,
    dom: string,
    photo: string,
    society: Society){
      this.id = id;
      this.firstname = firstname;
      this.middlename = middlename;
      this.lastname = lastname;
      this.gender = gender;
      this.mobile = mobile;
      this.whatsapp = whatsapp;
      this.email = email;
      this.occupation = occupation;
      this.address = address;
      this.city = city;
      this.area = area;
      this.state = state;
      this.country = country;
      this.pincode = pincode;
      this.dob = dob;
      this.maritalstatus = maritalstatus;
      this.dom = dom;
      this.photo = photo;
      this.society = society;
  }
}

export class Family{
  id: number;
  members: Person[];
  name: string;
  society: Society;

  constructor(
    id: number,
    members: Person[],
    name: string,
    society: Society){
      this.id = id;
      this.members = members;
      this.name = members[0].firstname;
      this.society = society;
  }
}

//sample data

export const societies: Society[] = [
  {"id": 1, "name": "bhagat", "description": "bhagat samaj"},
  {"id": 2, "name": "patel", "description": "patel samaj"},
  {"id": 3, "name": "brahman", "description": "brahman samaj"},
];

export const persons: Person[] = [
  {"id":1,
  "firstname":"meet",
  "middlename":"sanjaykumar",
  "lastname":"patel",
  "gender": "male",
  "mobile" : "1023564897",
  "whatsapp" : "1023564789",
  "email" : "meetpatel21199@gmail.com",
  "occupation" : "developer",
  "address" : "",
  "city" : "vadodara",
  "area" : "manjalpur",
  "state" : "gujarat",
  "country" : "India",
  "pincode" : "391135",
  "dob" : "1-1-1999",
  "maritalstatus" : "unmarried",
  "dom" : "",
  "photo": "photo url...",
  "society": new Society(1,"patel","patel samaj")
},
{"id":2,
"firstname":"mirank",
"middlename":"rudrakumar",
"lastname":"patel",
"gender": "male",
"mobile" : "1023564897",
"whatsapp" : "1023564789",
"email" : "mirankpatel21199@gmail.com",
"occupation" : "developer",
"address" : "",
"city" : "vadodara",
"area" : "akota",
"state" : "gujarat",
"country" : "India",
"pincode" : "391135",
"dob" : "1-1-1999",
"maritalstatus" : "unmarried",
"dom" : "",
"photo": "photo url...",
"society": new Society(2,"bhagat","bhagat samaj")
},
{"id":3,
  "firstname":"rudra",
  "middlename":"mirankkumar",
  "lastname":"patel",
  "gender": "male",
  "mobile" : "1023564897",
  "whatsapp" : "1023564789",
  "email" : "meetpatel21199@gmail.com",
  "occupation" : "developer",
  "address" : "",
  "city" : "vadodara",
  "area" : "dabhoi",
  "state" : "gujarat",
  "country" : "India",
  "pincode" : "391135",
  "dob" : "1-1-1999",
  "maritalstatus" : "unmarried",
  "dom" : "",
  "photo": "photo url...",
  "society": new Society(1,"brahman","brahman samaj")
},
];
