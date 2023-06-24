import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscribers } from '../httpclient.service';

@Component({
  selector: 'app-top-subscribers-by-points',
  templateUrl: './top-subscribers-by-points.component.html',
  styleUrls: ['./top-subscribers-by-points.component.css']
})
export class TopSubscribersByPointsComponent implements OnInit {

 

  Subscribers: Subscribers[] = []




  constructor( private httpclient : HttpClient) {}




  ngOnInit() : void {

  this.httpclient.get<any>('http://localhost:3000/Subscribers')

  .subscribe((result : any[] ) => {

    this.Subscribers = result

    console.warn("Subscribers", this.Subscribers)

}

  )}

}
