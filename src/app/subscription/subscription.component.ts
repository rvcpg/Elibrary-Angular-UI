import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {




  data: any;

 

  constructor(private router: Router, private http: HttpClient) {}




  ngOnInit() {

    // TODO document why this method 'ngOnInit' is empty

  }

 

  subscription(data: any) {

    this.http.post<any>('http://localhost:3000/Subscription', data)

    .subscribe((result: any) => {

    console.warn(result)

    })

    alert("Book subscribed successfully");

  }




  submit() {




    (<any>this.router).navigate(["/dashboard"])




  }

  book() {

    (<any>this.router).navigate(["/surfe-books"])




  }




  quiz() {




    (<any>this.router).navigate(["/takequiz"])




  }




  logout() {

    (<any>this.router).navigate(["/logout"])

  }




  subscribe() {

    (<any>this.router).navigate(["/subscribe"])

  }




}
