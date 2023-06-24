import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';




export class NewUser {

  constructor(

    public id: string,

    public firstName: string,

    public lastName: string,

    public email: string,

    public username: string,

    public password: string,

  ) {

  }

}




export class ExistingUser {

  constructor(

    public id: string,

    public firstName: string,

    public lastName: string,

    public email: string,

    public username: string,

    public password: string,

  ) {

  }

}





export class Book {

  constructor(

    public id: string,

    public name: string,

    public author: string,

    public category: string,

    public url: string

  ) {

  }

}





export class Subscription {

  constructor(

    public id: string,

    public fullName: string,

    public phoneNumber: number,

    public email: string,

    public fare: number,

    public subscribedOn: string,

    public name: string,

    public author: string,

    public category: string,

  ) {

  }




}




export class Subscribers {

  constructor(

    public name: string,

    public points: string,

    public email: string,

    public firstName: string,

    public lastName: string,

    public fare: string,

    public subscribedOn: string,

    public expireOn: string,

  ) {

  }

}




export class HarryPotterQuiz {

  constructor(

    public question: string,

    public options: string,

    public answer: string,

    public selectedOption: string,

  ) {

  }

}




export class InterstellarQuiz {

  constructor(

    public question: string,

    public options: string,

    public answer: string,

    public selectedOption: string,

  ) {

  }

}




@Injectable({

  providedIn: 'root'

})

export class HttpclientService {

  private dbUrl = 'assets/db.json';




  private url = "http://localhost:3000";





  constructor(private httpclient: HttpclientService, private http: HttpClient) { }





  ExistingUsers(data: any) {

    return this.http.post<ExistingUser[]>('http://localhost:3000/users', data);

  }




  NewUsers(data: any) {

    return this.http.post<NewUser[]>("http://localhost:3000/users", data);

  }




  Subscription(data: any) {

    return this.http.post<Subscription[]>("http://localhost:3000/Subscription", data);

  }




  getSubscription(data: any) {

    return this.http.get<Subscription[]>("http://localhost:3000/subscription", data);

  }




  Subscribers(data: any) {

    return this.http.get<Subscribers[]>("http://localhost:3000/Subscribers", data);

  }




  Book(id: any, name: any, category: any, author: any, url: any) {

    return this.http.get<Book[]>(`${"http://localhost:3000/Book"}/${id}/${name}/${category}/${author}/${url}`);

  }




  searchbyName(name: any) {

    return this.http.get<Book[]>(`${"http://localhost:3000/Book"}/${name}`);

  }




  searchbyAuthor(author: any) {

    return this.http.get<Book[]>(`${"http://localhost:3000/Book"}/${author}`);

  }




  searchbyCategory(category: any) {

    return this.http.get<Book[]>(`${"http://localhost:3000/Book"}/${category}`);

  }




  HarryPotterQuiz() {

    return this.http.get<any[]>('http://localhost:3000/HarryPotterQuiz');

  }




  InterstellarQuiz() {

    return this.http.get<any[]>('http://localhost:3000/interstellarQuiz');

  }




  deleteBook(id: any) {

    return this.http.delete<Book[]>(`${"http://localhost:3000/Book"}/${id}`);

  }




  addBook(data: any) {

    return this.http.post<Book[]>('http://localhost:3000/Book', data);

  }




  updateBook(id: any, data: any) {

    return this.http.put<Book[]>(`${"http://localhost:3000/Book"}/${id}`, data);

  }




  getUpdate(id: any) {

    return this.http.get<Book[]>(`${"http://localhost:3000/Book"}/${id}`);

  }

}
