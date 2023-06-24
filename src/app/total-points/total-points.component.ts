import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-total-points',
  templateUrl: './total-points.component.html',
  styleUrls: ['./total-points.component.css']
})
export class TotalPointsComponent implements OnInit {




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
