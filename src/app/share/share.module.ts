// import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgZorroAntdModule } from 'ng-zorro-antd'

@NgModule({
  imports: [CommonModule, NgZorroAntdModule.forRoot()],
  exports: [CommonModule, NgZorroAntdModule],
  providers: []
})
export class ShareModule {}
