import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout-page/layout.component';
import { LogingPageComponent } from './pages/loging-page/loging-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

//localhost:4200/auth/
const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {path:'loging', component:LogingPageComponent },
      {path:'register', component:RegisterPageComponent },
      {path:'**', redirectTo:'loging'}
    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
