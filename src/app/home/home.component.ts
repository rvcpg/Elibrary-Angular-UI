import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 

  title = 'E-Library';


 

  username: string | undefined;

  password: string | undefined;


 

  constructor(private http: HttpClient, private router: Router) { }


 

  ngOnInit(): void {

    // TODO document why this method 'ngOnInit' is empty


 

  }


 

  login(): void {

    // Check login credentials

    this.http.get<any>('http://localhost:3000/users')

      .subscribe(users => {

        const user = users.find((u: { username: string | undefined; password: string | undefined; }) => u.username === this.username && u.password === this.password);

        if (user) {

          alert('Login successful!');

          (<any>this.router).navigate(["/dashboard"])

          // Implement your logic for successful login

        } else {

          alert('Invalid username or password');

          (<any>this.router).navigate([" "])

        }

      });


 

  }


 

}



 
