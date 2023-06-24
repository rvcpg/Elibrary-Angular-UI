import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalPointsComponent } from './total-points/total-points.component';
import { BooksSubscribedComponent } from './books-subscribed/books-subscribed.component';
import { ActivesubscriptionsComponent } from './activesubscriptions/activesubscriptions.component';
import { TopSubscribersByPointsComponent } from './top-subscribers-by-points/top-subscribers-by-points.component';
import { TrendChartComponent } from './trend-chart/trend-chart.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { InterstellarComponent } from './interstellar/interstellar.component';
import { HarryquizComponent } from './harryquiz/harryquiz.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PreviewComponent } from './preview/preview.component';
import { TakequizComponent } from './takequiz/takequiz.component';
import { SurfeBooksComponent } from './surfe-books/surfe-books.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NewuserComponent } from './newuser/newuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoutComponent,
    DashboardComponent,
    TotalPointsComponent,
    BooksSubscribedComponent,
    ActivesubscriptionsComponent,
    TopSubscribersByPointsComponent,
    TrendChartComponent,
    DialogboxComponent,
    InterstellarComponent,
    HarryquizComponent,
    ReadmoreComponent,
    SubscribeComponent,
    SubscriptionComponent,
    PreviewComponent,
    TakequizComponent,
    SurfeBooksComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
