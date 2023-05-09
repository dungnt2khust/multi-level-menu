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
  Renderer2,
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

  @Input() isChildren = false;

  @Input() maxHeight = 500;

  @ViewChild('multiMenu', { static: false, read: null }) multiMenu: ElementRef;

  @ViewChild('popover', { static: false, read: null }) popover: ElementRef;

  componentWidthTemp = 0;

  intervalListenWidthChange = null;

  multiLevelItem = null;

  showSubMenu = false;

  dataSourceItem = [];

  positionPopover = {};

  positionSubMenu = 'left';

  constructor(private renderer: Renderer2) {
    /**
     * This events get called by all clicks on the page
     */
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.popover?.nativeElement?.contains(e.target) &&
        !this.multiLevelItem?.contains(e.target)
      ) {
        if (this.showSubMenu) this.showSubMenu = false;
      }
    });
  }

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

  toggleSubMenu(e, item, index) {
    if (index != -1 && item[this.childrenField]) {
      this.multiLevelItem = e.target;
      this.showSubMenu = !this.showSubMenu;
      this.dataSourceItem = item[this.childrenField];
      var rect = this.multiLevelItem.getBoundingClientRect();

      if (index <= Math.ceil(this.visibleIndex / 2)) {
        this.positionPopover = {
          top: rect.bottom + 'px',
          left: rect.left + 'px',
          right: 'unset',
        };
        this.positionSubMenu = 'left';
      } else {
        this.positionPopover = {
          top: rect.bottom + 'px',
          left: 'unset',
          right: window.innerWidth - rect.right + 'px',
        };
        this.positionSubMenu = 'right';
      }
    }

    if (index == -1) {
      this.multiLevelItem = e.target;
      this.showSubMenu = !this.showSubMenu;
      this.dataSourceItem = this.dataSource.slice(this.visibleIndex + 1);
      var rect = this.multiLevelItem.getBoundingClientRect();

      this.positionPopover = {
        top: rect.bottom + 'px',
        left: 'unset',
        right: window.innerWidth - rect.right + 'px',
      };
      this.positionSubMenu = 'right';
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
