import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { ROUTES } from './app.routes'
import { MyInterceptor } from './service/api-interceptor.service'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
