import { Routes } from '@angular/router'

export const ROUTES: Routes = [
  { path: '', loadChildren: 'app/main/main.module#MainModule' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]
