import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  buildTree = false;
  idSelected = 11;
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
          Id: 2,
          Name: 'Phòng chống covid',
          Children: [
            {
              Id: 3,
              Name: 'Tiêm vaccin',
              Children: [
                {
                  Id: 4,
                  Name: 'Tiêm mũi 2',
                },
                {
                  Id: 5,
                  Name: 'Cập nhận trạng thái',
                },
              ],
            },
            {
              Id: 6,
              Name: 'Đeo khẩu trang',
            },
          ],
        },
        {
          Id: 7,
          Name: 'Giữ vệ sinh',
        },
        {
          Id: 8,
          Name: 'Tuân thủ nội quy',
        },
      ],
    },
    {
      Id: 9,
      Name: 'Đào tạo - Chia sẻ',
    },
    {
      Id: 10,
      Name: 'Tin tức',
      Children: [
        {
          Id: 11,
          Name: 'Phòng chống covid',
          Children: [
            {
              Id: 12,
              Name: 'Tiêm vaccin',
              Children: [
                {
                  Id: 13,
                  Name: 'Tiêm mũi 2',
                },
                {
                  Id: 14,
                  Name: 'Cập nhận trạng thái',
                },
              ],
            },
            {
              Id: 15,
              Name: 'Đeo khẩu trang',
            },
          ],
        },
        {
          Id: 16,
          Name: 'Giữ vệ sinh',
        },
        {
          Id: 17,
          Name: 'Tuân thủ nội quy',
        },
      ],
    },
    {
      Id: 18,
      Name: 'Bài học kinh doanh',
      Children: [
        {
          Id: 19,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 20,
      Name: 'Tuyển dụng',
      Children: [
        {
          Id: 21,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 22,
      Name: 'Người MISA',
      Children: [
        {
          Id: 23,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 24,
      Name: 'Tư vấn hỗ trợ',
      Children: [
        {
          Id: 25,
          Name: 'Tin điều hành 1',
        },
      ],
    },
    {
      Id: 26,
      Name: 'Sản phẩm mới',
    },
    {
      Id: 27,
      Name: 'Design Thinking',
    },
    {
      Id: 28,
      Name: 'Hợp tác đào tạo',
    },
    {
      Id: 29,
      Name: 'MISA 25 năm',
      Children: [
        {
          Id: 30,
          Name: 'Tiêm vaccin',
          Children: [
            {
              Id: 31,
              Name: 'Tiêm mũi 2',
            },
            {
              Id: 32,
              Name: 'Cập nhận trạng thái',
            },
          ],
        },
        {
          Id: 33,
          Name: 'Đeo khẩu trang',
        },
      ],
    },
    {
      Id: 34,
      Name: 'Góc an ninh',
    },
    {
      Id: 35,
      Name: 'Sản phẩm mới',
    },
    {
      Id: 36,
      Name: 'Design Thinking',
    },
    {
      Id: 37,
      Name: 'Hợp tác đào tạo',
    },
    {
      Id: 38,
      Name: 'MISA 25 năm',
    },
    {
      Id: 39,
      Name: 'Góc an ninh',
    },
  ];

  optionChange(e) {
    console.log(e);
    this.idSelected = e.Id;
  }
}
