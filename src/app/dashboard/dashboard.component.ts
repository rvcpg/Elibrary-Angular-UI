import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExistingUser } from '../httpclient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent
implements OnInit {
books() {
throw new Error('Method not implemented.');
}


 

  @Input() user: ExistingUser | undefined;


 

  users: ExistingUser[] = []

 

  constructor(private router: Router, private httpclient: HttpClient) {}


 

  ngOnInit() : void {

    this.httpclient.get<any>('http://localhost:3000/users')

    .subscribe((result : any[] ) => {

      this.users = result

      console.warn("Subscribers", this.users)

  }

    )}




 

  submit() {


 

    (<any>this.router).navigate(["/surfe-books"])


 

  }


 

  quiz() {


 

    (<any>this.router).navigate(["/takequiz"])


 

  }


 

  logout() {

    (<any>this.router).navigate(["/logout"])

  }


 

}


 