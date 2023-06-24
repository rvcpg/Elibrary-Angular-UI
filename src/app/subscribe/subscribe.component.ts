import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExistingUser } from '../httpclient.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {




  users: ExistingUser[] = [];




  adminlog = new FormGroup({




    firstName: new FormControl('', Validators.required),

    lastName: new FormControl('', Validators.required),

    email: new FormControl('', Validators.required),

    fare: new FormControl('', Validators.required),

    subscriedOn: new FormControl('', Validators.required),

    payment: new FormControl('', Validators.required),




  })




  constructor(private httpclient: HttpClient, private router: Router, private rout: ActivatedRoute) { }




  ngOnInit() {

    console.log(this.rout.snapshot.params['id'])




    this.httpclient.get<any[]>("http://localhost:3000/users/1")

      .subscribe((result: any) => {

        console.log("result", result)




        this.adminlog.patchValue({




          firstName: result.firstName,

          lastName: result.lastName,

          email: result.email,

        })

      })

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




  save() {

    window.print();

  }




}
