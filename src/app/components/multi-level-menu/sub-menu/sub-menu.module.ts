import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubMenuComponent } from './sub-menu.component';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SubMenuComponent],
  exports: [SubMenuComponent],
})
export class SubMenuModule {}
