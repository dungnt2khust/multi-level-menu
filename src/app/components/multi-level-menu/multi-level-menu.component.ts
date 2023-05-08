/**
 * createdby ntdung5 08.05.2023
 */

import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-multi-level-menu',
  templateUrl: './multi-level-menu.component.html',
  styleUrls: ['./multi-level-menu.component.scss'],
})
export class MultiLevelMenuComponent implements OnInit, OnDestroy {
  // Constants
  MARGIN_ITEM_RIGHT = 24;
  PADDING_LEFT_MENU = 20;
  OTHER_WIDTH = 80;

  @Input() dataSource = [];

  @Input() valueField = 'Id';

  @Input() displayField = 'Name';

  @Input() childrenField = 'Children';

  @ViewChild('multiMenu', { static: false, read: null }) multiMenu: ElementRef;

  componentWidthTemp = 0;

  intervalListenWidthChange = null;

  multiLevelItem = null;

  showSubMenu = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.intervalListenWidthChange = setInterval(() => {
      this.repaint();
    }, 10);
  }

  ngOnDestroy() {
    clearInterval(this.intervalListenWidthChange);
  }

  /**
   * Hàm vẽ lại component
   */
  visibleIndex = 0;
  itemsWidth = [];
  repaint() {
    if (this.multiMenu && this.multiMenu.nativeElement) {
      var menuElement = this.multiMenu.nativeElement;
      var componentWidth = menuElement.getBoundingClientRect().width;

      if (this.componentWidthTemp != componentWidth) {
        var menuItemElements = menuElement.querySelectorAll(
          '.multi-level-menu__item'
        );
        let sumItemsWidth = 0;
        this.itemsWidth = [];

        if (menuItemElements) {
          for (let i = 0; i < menuItemElements.length; i++) {
            let itemWidth = menuItemElements[i].getBoundingClientRect().width;
            sumItemsWidth += itemWidth + this.MARGIN_ITEM_RIGHT;
            this.itemsWidth.push(itemWidth + this.MARGIN_ITEM_RIGHT);

            if (sumItemsWidth >= componentWidth - this.OTHER_WIDTH) {
              this.visibleIndex = i - 1;
              break;
            }
          }
          if (this.visibleIndex == 0)
            this.visibleIndex = this.dataSource.length - 1;
        }

        this.componentWidthTemp = componentWidth;
      }
    }
  }

  get offsetOther() {
    return (
      this.itemsWidth
        .slice(0, this.visibleIndex + 1)
        .reduce((result, curr) => result + curr, 0) +
      this.PADDING_LEFT_MENU +
      'px'
    );
  }
}
