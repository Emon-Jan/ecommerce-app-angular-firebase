import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { AuthService } from "./auth.service";
import "rxjs/operator/map";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.authenticate().map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(["/login"], {
          queryParams: { returnUrl: state.url }
        });
        return false;
      }
    });
  }
}
