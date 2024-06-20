import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
   const userService: UserService = inject(UserService)

  //let isAuth = false;
  // if (!isAuth){
  //   router.navigateByUrl('/login');
  // }
  // return isAuth;

  return userService.isAuthenticatedUser().pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return true;
      } else {
        router.navigateByUrl('/login');
        return false;
      }
    })
  )
};

// directivas en angular
// session Storage  web
// local storage web
