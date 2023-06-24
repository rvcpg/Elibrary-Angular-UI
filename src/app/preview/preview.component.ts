import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  name: any;

  email: any;

 

  constructor(private router: Router, public matdialog: MatDialog) {}




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





  openDialog() {

    this.matdialog.open(DialogboxComponent);

  }

 

}