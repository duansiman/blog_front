import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let menus = [
      {imgUrl: 'app/images/index/u4.png', name: '首页'},
      {imgUrl: 'app/images/index/u10.png', name: 'Linux 编程'},
      {imgUrl: 'app/images/index/u12.png', name: '前端笔记'},
      {imgUrl: 'app/images/index/u16.png', name: '运维管理'},
      {imgUrl: 'app/images/index/u20.png', name: '免费资源'},
      {imgUrl: 'app/images/index/u24.png', name: '留言'}
    ];
    return {menus};
  }
} 