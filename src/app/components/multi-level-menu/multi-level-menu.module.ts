import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiLevelMenuComponent } from './multi-level-menu.component';
import { SubMenuModule } from './sub-menu/sub-menu.module';

@NgModule({
  imports: [CommonModule, FormsModule, SubMenuModule],
  declarations: [MultiLevelMenuComponent],
  exports: [MultiLevelMenuComponent],
})
export class MultiLevelMenuModule {}
