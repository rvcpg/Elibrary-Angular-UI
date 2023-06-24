import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../httpclient.service';

@Component({
  selector: 'app-surfe-books',
  templateUrl: './surfe-books.component.html',
  styleUrls: ['./surfe-books.component.css']
})
export class SurfeBooksComponent implements OnInit {




  bookList: Book[] = [];




  // filterForm = new FormGroup(

  //   {

  //     name: new FormControl('', Validators.required),

  //     author: new FormControl('', Validators.required),

  //     category: new FormControl('', Validators.required),

  //   }

  // )




  name: any;

  uniqueName: any[] = [];




  category: any;

  uniqueCategory: any[] = [];




  author: any;

  uniqueAuthor: any[] = [];




  constructor(private router: Router, private httpclient: HttpClient) { }




  ngOnInit(): void {

    this.httpclient.get<any[]>('http://localhost:3000/Book')

      .subscribe((response) => {

        console.warn(response)

        this.bookList = response

      })

  }





  searchByName() {

    if (this.name == "") {

      this.ngOnInit();

    } else {

      this.bookList = this.bookList.filter(res => {

        return res.name.toLowerCase().match(this.name.toLowerCase());

      }

   )}

   

  }




  searchByAuthor() {

    if (this.author == "") {

      this.ngOnInit();

    } else {

      this.bookList = this.bookList.filter(res => {

        return res.author.toLowerCase().match(this.author.toLowerCase());

      }

   )}

   

  }




  searchByCategory() {

    if (this.category == "") {

      this.ngOnInit();

    } else {

      this.bookList = this.bookList.filter(res => {

        return res.category.toLowerCase().match(this.category.toLowerCase());

      }

   )}

   

  }

 

 







  submit() {




    (<any>this.router).navigate(["/dashboard"])




  }





  quiz() {




    (<any>this.router).navigate(["/takequiz"])




  }




  logout() {

    (<any>this.router).navigate(["/logout"])

  }




  preview() {

    (<any>this.router).navigate(["/preview"])




  }




  subscription() {

    (<any>this.router).navigate(["/subscription"])

  }




}
