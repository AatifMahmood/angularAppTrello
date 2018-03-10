// Angular packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from "@angular/router";
// Angular Componenets
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AllboardsComponentComponent } from './allboards-component/allboards-component.component';

// Angular Material Components
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';

// Angular 3rd-Party Packages
import {ScrollbarModule} from "ngx-scrollbar";
const appRoutes:Routes =[
  {path:'login',component:LoginComponentComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponentComponent, pathMatch:'full'},
  {path:'',redirectTo:'/login', pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    AllboardsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollbarModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
