import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit {
  @Input() dataSource = [];

  @Input() valueField = 'Id';

  @Input() displayField = 'Name';

  @Input() childrenField = 'Children';

  constructor() {}

  ngOnInit() {}
}
