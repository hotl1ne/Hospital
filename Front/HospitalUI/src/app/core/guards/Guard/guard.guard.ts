import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../../services/AuthService/auth.service';
export const guardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const auth = inject(Auth);

  if(auth.checkToken()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
