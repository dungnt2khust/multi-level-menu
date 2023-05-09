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
  EventEmitter,
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

  @Output() optionChange = new EventEmitter();

  @ViewChild('multiMenu', { static: false, read: null }) multiMenu: ElementRef;

  @ViewChild('popover', { static: false, read: null }) popover: ElementRef;

  componentWidthTemp = 0;

  intervalListenWidthChange = null;

  multiLevelItem = null;

  showSubMenu = false;

  dataSourceItem = [];

  positionPopover = {};

  positionSubMenu = 'left';

  lastIndex = -1;

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

  ngOnInit() {
    window.addEventListener('resize', this.hideSubMenuResize.bind(this));
    document.addEventListener(
      'scroll',
      this.hideSubMenuScroll.bind(this),
      true
    );
  }

  ngAfterViewInit() {
    this.intervalListenWidthChange = setInterval(() => {
      this.repaint();
    }, 10);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.hideSubMenuResize.bind(this));
    document.removeEventListener(
      'scroll',
      this.hideSubMenuScroll.bind(this),
      true
    );

    clearInterval(this.intervalListenWidthChange);
  }

  hideSubMenuScroll(e) {
    if (e.target && !e.target.classList?.contains('sub-menu')) {
      this.showSubMenu = false;
    }
  }

  hideSubMenuResize(e) {
    this.showSubMenu = false;
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
    if (this.lastIndex == index) {
      this.showSubMenu = !this.showSubMenu;
    } else {
      if (!this.showSubMenu) this.showSubMenu = true;
      this.lastIndex = index;
    }

    if (index != -1) {
      if (item[this.childrenField]) {
        this.multiLevelItem = this.checkElementNestedByClass(
          e.target,
          'multi-level-menu__item'
        );
        this.dataSourceItem = item[this.childrenField];
        var rect = this.multiLevelItem.getBoundingClientRect();

        if (index <= Math.ceil(this.visibleIndex / 2)) {
          this.positionPopover = {
            top: rect.bottom + 'px',
            left: rect.left + 'px',
          };
          this.positionSubMenu = 'left';
        } else {
          this.positionPopover = {
            top: rect.bottom + 'px',
            right: window.innerWidth - rect.right + 'px',
          };
          this.positionSubMenu = 'right';
        }
      } else {
        this.optionChange.emit(item);
      }
    }

    if (index == -1) {
      this.multiLevelItem = this.checkElementNestedByClass(
        e.target,
        'multi-level-menu__other'
      );
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

  /**
   * Kiểm tra element có thuộc một element cha có class cho trước hay không
   */
  checkElementNestedByClass(element, className) {
    if (element && className) {
      var parentE = element;
      if (parentE) {
        // Nếu không chứa class thì tiếp tục vòng lặp
        while (parentE.classList.contains(className) == false) {
          // Đi ra một element cha
          parentE = parentE.parentElement;

          // Khi đã duyệt hết mà không có thì set null và thoát vòng lặp
          if (parentE.tagName == 'BODY') {
            parentE = null;
            break;
          }
        }
      }
      // Trả về kết quả
      return parentE;
    } else return null;
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
