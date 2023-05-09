import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  dataSource = [
    {
      Id: 1,
      Name: 'Tin điều hành',
      Children: [
        {
          Id: 11,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 2,
      Name: 'Đào tạo - Chia sẻ',
      Children: [
        {
          Id: 11,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 3,
      Name: 'Tin tức',
      Children: [
        {
          Id: 11,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 4,
      Name: 'Bài học kinh doanh',
      Children: [
        {
          Id: 11,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 5,
      Name: 'Tuyển dụng',
      Children: [
        {
          Id: 11,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 6,
      Name: 'Người MISA',
      Children: [
        {
          Id: 11,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 7,
      Name: 'Tư vấn hỗ trợ',
      Children: [
        {
          Id: 11,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 8,
      Name: 'Sản phẩm mới',
    },
    {
      Id: 9,
      Name: 'Design Thinking',
    },
    {
      Id: 10,
      Name: 'Hợp tác đào tạo',
    },
    {
      Id: 11,
      Name: 'MISA 25 năm',
    },
    {
      Id: 12,
      Name: 'Góc an ninh',
    },
    {
      Id: 8,
      Name: 'Sản phẩm mới',
    },
    {
      Id: 9,
      Name: 'Design Thinking',
    },
    {
      Id: 10,
      Name: 'Hợp tác đào tạo',
    },
    {
      Id: 11,
      Name: 'MISA 25 năm',
    },
    {
      Id: 12,
      Name: 'Góc an ninh',
    },
  ];
}
