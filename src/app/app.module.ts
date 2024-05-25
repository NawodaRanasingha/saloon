import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './mudules/admin/admin.component';
import { AccountComponent } from './mudules/admin/components/account/account.component';
import { ViewAppointmentsComponent } from './mudules/admin/components/view-appointments/view-appointments.component';
import { ContactComponent } from './components/contact/contact.component';
 import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { registerComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BookingComponent,
    ProductsComponent,
    NavbarComponent,
    SidebarComponent,
    AdminComponent,
    AccountComponent,
    ViewAppointmentsComponent,
    ContactComponent,
     LoginComponent,
    FooterComponent,
    registerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
