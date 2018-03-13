import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('interceptor')
    return next.handle(req).do(event => {
      console.log(event)
    })
  }
}
