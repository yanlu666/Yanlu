import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindPage } from './find';

@NgModule({
  declarations: [
    FindPage,
  ],
  imports: [
    IonicPageModule.forChild(FindPage),
  ],
})
export class FindPageModule {}
