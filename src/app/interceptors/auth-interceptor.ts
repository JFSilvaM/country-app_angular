import type { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_ORIGIN = environment.restCountriesApi;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(API_ORIGIN) && !req.headers.has('Authorization')) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${environment.restCountriesToken}`,
      },
    });
  }

  return next(req);
};
