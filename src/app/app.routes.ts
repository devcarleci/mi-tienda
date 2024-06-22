import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { LoginComponent } from './pages/login/login.component';
import { TableComponent } from './pages/table/table.component';
import { ProductComponent } from './pages/product/product.component';
import { authGuard } from './services/guards/auth.guard';
import { AdminComponent } from './pages/admin/admin/admin.component';

export const routes: Routes = [
  {
    path : '' ,
    component : HomeComponent

  },
  {
    path : 'login',
    //component : LoginComponent
    loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
  },
  {
    path : 'about',
    //component : AboutComponent
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
  },
  {
    path : 'post',
    canActivate : [authGuard],
    //component : PostComponent
    loadComponent: () => import('./pages/post/post.component').then(c => c.PostComponent)
  },
  {
    path : 'table',
    canActivate : [authGuard],
    //component : TableComponent
    loadComponent: () => import('./pages/table/table.component').then(c => c.TableComponent)
  },
  {
    path : 'product',
    //component : ProductComponent
    loadComponent: () => import('./pages/product/product.component').then(c => c.ProductComponent)
  },
  {
    path : 'cupon',
    loadComponent: () => import('./pages/cupon/cupon.component').then(c => c.CuponComponent)
  },
  {
    path : 'cupon/:cuponid',
    loadComponent: () => import('./pages/cupon/cupon.component').then(c => c.CuponComponent)
  },
  {
    path : 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  }

];
// rutas de carpetas
