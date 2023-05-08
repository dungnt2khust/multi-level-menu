import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiLevelMenuComponent } from './multi-level-menu.component';
import { DxPopoverModule } from 'devextreme-angular';

@NgModule({
  imports: [CommonModule, DxPopoverModule],
  declarations: [MultiLevelMenuComponent],
  exports: [MultiLevelMenuComponent],
})
export class MultiLevelMenuModule {}
