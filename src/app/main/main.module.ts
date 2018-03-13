import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { MainComponent } from './main.component'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mainRoutes)],
  declarations: [MainComponent, HomeComponent, AboutComponent],
  exports: [RouterModule]
})
export class MainModule {}
