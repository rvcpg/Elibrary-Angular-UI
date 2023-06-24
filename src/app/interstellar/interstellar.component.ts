import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterstellarQuiz } from '../httpclient.service';

@Component({
  selector: 'app-interstellar',
  templateUrl: './interstellar.component.html',
  styleUrls: ['./interstellar.component.css']
})
export class InterstellarComponent implements OnInit {








  InterstellarQuiz: InterstellarQuiz[] = [];

  currentQuestionIndex: number = 0;

  score: number = 0;

  selectedOption: string | undefined;




  constructor(private router: Router, private httpClient: HttpClient) { }





  ngOnInit() {




    this.httpClient.get<any>('http://localhost:3000/InterstellarQuiz')

      .subscribe((result: any[]) => {

        this.InterstellarQuiz = result;

      });




  }




  onNext() {

    const currentQuestion = this.InterstellarQuiz[this.currentQuestionIndex];

    if (this.selectedOption === currentQuestion.answer) {

      this.score++;

    }

    this.currentQuestionIndex++;

    this.selectedOption = '';

  }








  submitQuiz() {

    let score = 0;

    this.InterstellarQuiz.forEach((question) => {

      if (question.selectedOption == question.answer) {

        score++;

      }

    });

    alert(`You quiz is completed`);

    alert(`You scored “${score}” out of “${this.InterstellarQuiz.length}”`);

  }







  // ==========================================================




  submit() {




    (<any>this.router).navigate(["/surfe-books"])




  }




  dashboard() {




    (<any>this.router).navigate(["/dashboard"])




  }




  quiz() {

    (<any>this.router).navigate(["/takequiz"])

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
