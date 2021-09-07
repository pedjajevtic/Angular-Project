import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  routes as childRoutes,
  ProductsModule
} from './products/products.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { ProductsComponent } from './products/products.component';

import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { PodesavanjaGuard } from './podesavanja.guard';
import { PodesavanjaComponent } from './podesavanja/podesavanja.component';

const routes: Routes = [
  // osnovne rute
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },

  // provera korisnika
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'podesavanja',
    component: PodesavanjaComponent,
    canActivate: [PodesavanjaGuard]
  },

  // ugnježdeno
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    ProtectedComponent,
    PodesavanjaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes), // <-- instaliranje ruta

    ProductsModule
  ],
  providers: [
    // sklonite ovo za "hash-bang" rutiranje
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    AUTH_PROVIDERS,
    LoggedInGuard,
    PodesavanjaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
