import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileDetailPage } from './file-detail';

@NgModule({
  declarations: [
    FileDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FileDetailPage),
  ],
})
export class FileDetailPageModule {}
