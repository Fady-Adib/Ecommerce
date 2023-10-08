
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { LoadingService } from './Loading.service';
LoadingService
@Injectable()
export class loadingInterceptor implements HttpInterceptor {
  constructor(private _LoadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._LoadingService.show();
console.log('loading');

    return next.handle(request).pipe(finalize(() => this._LoadingService.hide())
    )
  }
}
