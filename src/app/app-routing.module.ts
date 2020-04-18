import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './pages/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomePublicComponent } from './pages/home-layout/home-public.component';
import { AutenticateService } from './services/autenticate.service';


const routes: Routes = [
  { path: '', redirectTo: 'Home', data: { title: 'Home' }, pathMatch: 'full' },
  {
    path: 'Home', component: HomePublicComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  //login config
  /* {
    path: 'login', component: LoginLayoutComponent, data: {
      title: 'First Component'
    }, children: [
      { path: '', component: LoginComponent }
    ]
  }, */
  //Home publico
  /* { path: 'Home', component: HomePublicComponent,
     children: [
      //{ path: '', redirectTo: 'first', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
    canActivate: [AutenticateService] 
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
