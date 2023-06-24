import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivesubscriptionsComponent } from './activesubscriptions/activesubscriptions.component';
import { BooksSubscribedComponent } from './books-subscribed/books-subscribed.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { HarryquizComponent } from './harryquiz/harryquiz.component';

import { HomeComponent } from './home/home.component';
import { NewUser } from './httpclient.service';
import { InterstellarComponent } from './interstellar/interstellar.component';
import { LogoutComponent } from './logout/logout.component';
import { NewuserComponent } from './newuser/newuser.component';
import { PreviewComponent } from './preview/preview.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SurfeBooksComponent } from './surfe-books/surfe-books.component';
import { TakequizComponent } from './takequiz/takequiz.component';
import { TopSubscribersByPointsComponent } from './top-subscribers-by-points/top-subscribers-by-points.component';
import { TotalPointsComponent } from './total-points/total-points.component';
import { TrendChartComponent } from './trend-chart/trend-chart.component';

const routes: Routes = [
  { path: '',component: HomeComponent },

  { path: 'logout', component: LogoutComponent},

  { path: 'dashboard', component: DashboardComponent},

  { path: 'surfe-books', component: SurfeBooksComponent},

  { path: 'takequiz', component: TakequizComponent},

  { path: 'activesubscription', component: ActivesubscriptionsComponent},

  { path: 'books-subscribed', component: BooksSubscribedComponent},

  { path: 'total-points', component: TotalPointsComponent},

  { path: 'top-subscribers-by-points', component: TopSubscribersByPointsComponent},

  { path: 'trend-chart', component: TrendChartComponent},

  { path: 'preview', component: PreviewComponent},

  { path: 'subscription', component: SubscriptionComponent},

  { path: 'subscribe', component: SubscribeComponent},

  { path: 'readmore', component: ReadmoreComponent},

  { path: 'harryquiz', component: HarryquizComponent},

  { path: 'interstellar', component: InterstellarComponent},

  { path: 'dialogbox', component: DialogboxComponent},

  {path: 'newuser', component: NewuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
