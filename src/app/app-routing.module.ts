import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent}, //canActivate, RouteGuard Service
  // { path: 'login',component: LoginComponent},
  // { path: 'welcome/:name',component: WelcomeComponent, canActivate:[RouteGuardService]},
  // { path: 'todos',component: ListTodosComponent, canActivate:[RouteGuardService]},
  // { path: 'logout',component: LogoutComponent, canActivate:[RouteGuardService]},
  // { path: 'todos/:id',component: TodoComponent, canActivate:[RouteGuardService]},
  // { path: '**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
