import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { LoginComponent } from './pages/login/login.component';
import { TableComponent } from './pages/table/table.component';
import { ProductComponent } from './pages/product/product.component';
import { authGuard } from './services/guards/auth.guard';

export const routes: Routes = [
  {
    path : '' ,
    component : HomeComponent

  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'post',
    canActivate : [authGuard],
    component : PostComponent
  },
  {
    path : 'table',
    canActivate : [authGuard],
    component : TableComponent
  },
  {
    path : 'product',
    component : ProductComponent
  }

];
// rutas de carpetas
