import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiLevelMenuComponent } from './multi-level-menu.component';

@NgModule({
  imports: [CommonModule, DxPopoverModule, DxTemplateModule],
  declarations: [MultiLevelMenuComponent],
  exports: [MultiLevelMenuComponent],
})
export class MultiLevelMenuModule {}
