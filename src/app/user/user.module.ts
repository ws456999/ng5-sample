import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { LoginComponent } from './login/login.component'
import { UserComponent } from './user.component'
import { ShareModule } from '../share/share.module'

const mainRoutes: Routes = [
  {
    path: '',
    // component: UserComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    ShareModule
  ],
  declarations: [LoginComponent, UserComponent],
  exports: [RouterModule]
})
export class UserModule {}
