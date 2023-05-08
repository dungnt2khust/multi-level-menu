import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiLevelMenuComponent } from './multi-level-menu.component';
import { DxPopoverModule, DxTemplateModule } from 'devextreme-angular';
import { SubMenuModule } from './sub-menu/sub-menu.module';

@NgModule({
  imports: [CommonModule, DxPopoverModule, DxTemplateModule, SubMenuModule],
  declarations: [MultiLevelMenuComponent],
  exports: [MultiLevelMenuComponent],
})
export class MultiLevelMenuModule {}
