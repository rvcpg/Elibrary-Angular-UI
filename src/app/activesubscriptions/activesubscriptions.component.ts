import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activesubscriptions',
  templateUrl: './activesubscriptions.component.html',
  styleUrls: ['./activesubscriptions.component.css']
})
export class ActivesubscriptionsComponent implements OnInit {




  subscription: Subscription[] = [];




  result: any;




  constructor(private http: HttpClient) { }




  ngOnInit(): void {

   

    this.http.get<any[]>('http://localhost:3000/subscription')

    .subscribe((response) => {

      console.log(response)

      console.log(response.length)

      // this.result = response.length




      if(response.length > 1) {

        setTimeout(() => {

          response.length = response.length - 1

          console.log(response.length)

          this.result = response.length

        }, 5000);

      }

      else {

        this.result = response.length

      }

    })

   

  }




}

