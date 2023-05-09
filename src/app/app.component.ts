import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  buildTree = false;
  // dataSource = [
  //   {
  //     Id: 1,
  //     Name: 'Tin điều hành',
  //   },
  //   {
  //     Id: 2,
  //     Name: 'MISA 25 năm',
  //     ParentId: 1,
  //   },
  // ];

  dataSource = [
    {
      Id: 1,
      Name: 'Tin điều hành',
      Children: [
        {
          Id: 11,
          Name: 'Phòng chống covid',
          Children: [
            {
              Id: 11,
              Name: 'Tiêm vaccin',
              Children: [
                {
                  Id: 11,
                  Name: 'Tiêm mũi 2',
                },
                {
                  Id: 11,
                  Name: 'Cập nhận trạng thái',
                },
              ],
            },
            {
              Id: 11,
              Name: 'Đeo khẩu trang',
            },
          ],
        },
        {
          Id: 11,
          Name: 'Giữ vệ sinh',
        },
        {
          Id: 11,
          Name: 'Tuân thủ nội quy',
        },
      ],
    },
    {
      Id: 2,
      Name: 'Đào tạo - Chia sẻ',
    },
    {
      Id: 3,
      Name: 'Tin tức',
      Children: [
        {
          Id: 11,
          Name: 'Phòng chống covid',
          Children: [
            {
              Id: 11,
              Name: 'Tiêm vaccin',
              Children: [
                {
                  Id: 11,
                  Name: 'Tiêm mũi 2',
                },
                {
                  Id: 11,
                  Name: 'Cập nhận trạng thái',
                },
              ],
            },
            {
              Id: 11,
              Name: 'Đeo khẩu trang',
            },
          ],
        },
        {
          Id: 11,
          Name: 'Giữ vệ sinh',
        },
        {
          Id: 11,
          Name: 'Tuân thủ nội quy',
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
      Children: [
        {
          Id: 11,
          Name: 'Tiêm vaccin',
          Children: [
            {
              Id: 11,
              Name: 'Tiêm mũi 2',
            },
            {
              Id: 11,
              Name: 'Cập nhận trạng thái',
            },
          ],
        },
        {
          Id: 11,
          Name: 'Đeo khẩu trang',
        },
      ],
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

  optionChange(e) {
    console.log(e);
  }
}
