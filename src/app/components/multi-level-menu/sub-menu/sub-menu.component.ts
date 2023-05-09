import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Renderer2,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit, OnDestroy {
  @Input() dataSource = [];

  @Input() valueField = 'Id';

  @Input() displayField = 'Name';

  @Input() childrenField = 'Children';

  @Input() maxHeight = 500;

  @Input() position = 'left';

  @Output() optionChange = new EventEmitter();

  @Input() value = -1;

  @Output() valueChanged = new EventEmitter();

  showSubMenu = false;

  subMenuItem = null;

  dataSourceItem = [];

  popoverPosition = {};

  lastIndex = -1;

  @ViewChild('popover', { static: false, read: null }) popover: ElementRef;

  constructor(private renderer: Renderer2) {
    /**
     * This events get called by all clicks on the page
     */
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.popover?.nativeElement?.contains(e.target) &&
        !this.subMenuItem?.contains(e.target)
      ) {
        if (this.showSubMenu) this.showSubMenu = false;
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  hideSubMenu() {
    console.log('sdfaf');
    this.showSubMenu = false;
  }

  toggleSubMenu(e, item, index) {
    if (this.lastIndex == index) {
      this.showSubMenu = !this.showSubMenu;
    } else {
      if (!this.showSubMenu) this.showSubMenu = true;
      this.lastIndex = index;
    }

    if (!this.isEmptyArray(item[this.childrenField])) {
      this.subMenuItem = this.checkElementNestedByClass(
        e.target,
        'sub-menu__item'
      );
      this.dataSourceItem = item[this.childrenField];
      var rect = this.subMenuItem.getBoundingClientRect();

      if (this.position == 'left') {
        this.popoverPosition = {
          top: rect.top - 1 + 'px',
          left: rect.right + 'px',
        };
      } else {
        this.popoverPosition = {
          top: rect.top - 1 + 'px',
          right: window.innerWidth - rect.left + 'px',
        };
      }
    } else {
      this.optionChange.emit(item);
      this.valueChanged.emit(item[this.valueField]);
    }
  }

  /**
   * Kiểm tra mảng rỗng
   */
  isEmptyArray(arr) {
    return !arr || !arr.length;
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
}
