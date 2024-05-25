import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
 import { LoginComponent } from './components/login/login.component';
import { registerComponent } from './components/register/register.component';

const routes: Routes = [

{path: '',redirectTo:'home',pathMatch:'full'},
{path: 'home',component : HomeComponent},
{path: 'contactus',component: ContactComponent},
{path: 'appointment', component: BookingComponent},
{path: 'aboutus', component: AboutComponent},
{path: 'login',component:LoginComponent},
{path : 'register',component:registerComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
