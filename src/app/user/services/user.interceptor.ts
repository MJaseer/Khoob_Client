import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HelperService } from './helper.service';

const url = 'https://passwordcraftsman.onrender.com/api'

export const userInterceptor: HttpInterceptorFn = (req, next) => {

  const helper = inject(HelperService)

  if (req.url.startsWith(`${url}/user`)) {
    return next(req);
  } else {
    return next(req);
  }

};
