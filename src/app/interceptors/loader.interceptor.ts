import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
 let  loarderService : LoaderService= inject(LoaderService)
 loarderService.Show();
  return next(req).pipe(finalize(()=>  loarderService.Hide()));
};
