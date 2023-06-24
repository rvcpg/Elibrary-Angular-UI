import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarryPotterQuiz } from '../httpclient.service';

@Component({
  selector: 'app-harryquiz',
  templateUrl: './harryquiz.component.html',
  styleUrls: ['./harryquiz.component.css']
})
export class HarryquizComponent implements OnInit {




  // HarryPotterQuiz: HarryPotterQuiz[] = []




  HarryPotterQuiz: HarryPotterQuiz[] = [];

  currentQuestionIndex: number = 0;

  score: number = 0;

  selectedOption: string | undefined;




  constructor(private router: Router, private httpClient: HttpClient) { }





  ngOnInit() {




    this.httpClient.get<any>('http://localhost:3000/HarryPotterQuiz')

      .subscribe((result: any[]) => {

        this.HarryPotterQuiz = result;

      });




  }




  onNext() {

    const currentQuestion = this.HarryPotterQuiz[this.currentQuestionIndex];

    if (this.selectedOption === currentQuestion.answer) {

      this.score++;

    }

    this.currentQuestionIndex++;

    this.selectedOption = '';

  }








  submitQuiz() {

    let score = 0;

    this.HarryPotterQuiz.forEach((question) => {

      if (question.selectedOption == question.answer) {

        score++;

      }

    });

    alert(`You quiz is completed`);

    alert(`You scored “${score}” out of “${this.HarryPotterQuiz.length}”`);

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
