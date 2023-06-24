import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {




  emailForm =new FormGroup({




    email : new FormControl('',Validators.required),

     

  })
email: any;





  constructor(private dialogRef: MatDialogRef<DialogboxComponent>) {




  }

  ngOnInit(): void {

    // TODO document why this method 'ngOnInit' is empty

 

  }




  close() {

    this.dialogRef.close();

}

}
