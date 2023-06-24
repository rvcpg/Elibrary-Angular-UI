import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books-subscribed',
  templateUrl: './books-subscribed.component.html',
  styleUrls: ['./books-subscribed.component.css']
})
export class BooksSubscribedComponent implements OnInit {




  subscription: Subscription[] = [];




  result: any;




  constructor(private http: HttpClient) { }




  ngOnInit(): void {

   

    this.http.get<any[]>('http://localhost:3000/subscription')

    .subscribe((response) => {

      console.log(response)

      console.log(response.length)

      this.result = response.length

    })

   

  }




}
