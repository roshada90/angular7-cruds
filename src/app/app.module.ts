import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RoutingModule } from './routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppComponent } from './components/app.component';
import { ViewComponent } from './components/view/view.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    RoutingModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
