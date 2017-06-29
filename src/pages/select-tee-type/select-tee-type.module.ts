import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectTeeTypePage } from './select-tee-type';

@NgModule({
  declarations: [
    SelectTeeTypePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectTeeTypePage),
  ],
  exports: [
    SelectTeeTypePage
  ]
})
export class SelectTeeTypePageModule {}
