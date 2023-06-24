import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-takequiz',
  templateUrl: './takequiz.component.html',
  styleUrls: ['./takequiz.component.css']
})
export class TakequizComponent implements OnInit {

 

  constructor(private router: Router) {}




  ngOnInit() {

    // TODO document why this method 'ngOnInit' is empty

 

  }




  submit() {




    (<any>this.router).navigate(["/surfe-books"])




  }




  dashboard() {




    (<any>this.router).navigate(["/dashboard"])




  }




  logout() {

    (<any>this.router).navigate(["/logout"])

  }




  harryquiz() {

    (<any>this.router).navigate(["/harryquiz"])

  }




  interstellar() {

    (<any>this.router).navigate(["/interstellar"])

  }

 




}
