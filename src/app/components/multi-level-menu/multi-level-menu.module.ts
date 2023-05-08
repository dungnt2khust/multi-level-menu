import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiLevelMenuComponent } from './multi-level-menu.component';
import { DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [CommonModule, DxSelectBoxModule],
  declarations: [MultiLevelMenuComponent],
  exports: [MultiLevelMenuComponent],
})
export class MultiLevelMenuModule {}
