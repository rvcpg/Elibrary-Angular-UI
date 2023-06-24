import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  data: any;




  adminlog = new FormGroup({




    username: new FormControl('', Validators.required),

    password: new FormControl('', Validators.required),




  })




  constructor(private httpClient: HttpClient, private router: Router) { }




  ngOnInit(): void {

    // TODO document why this method 'ngOnInit' is empty

  }

  signup() {

    this.httpClient

      .post<any>('http://localhost:3000/users', this.adminlog.value)

      .subscribe((result: any) => {

        console.warn(result);

      });

    alert('user added successfully');

    (<any>this.router).navigate(['/']);

  }

}
