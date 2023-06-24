import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {

 

  constructor(private router: Router) {}




  ngOnInit() {

    // TODO document why this method 'ngOnInit' is empty

 

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




  readmore() {

    (<any>this.router).navigate(["/readmore"])

  }




}
