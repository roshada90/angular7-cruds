import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewComponent } from './components/view/view.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', pathMatch: 'full', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'view', component: ViewComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'edit', component: EditComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
