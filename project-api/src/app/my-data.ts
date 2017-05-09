import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MyData implements InMemoryDbService {
  createDb(){
    let mydata = [
      { id: 1, name: 'Edgar' },
      { id: 2, name: 'Edynson' },
      { id: 3, name: 'Edd' },
      { id: 4, name: 'Coronado' }
    ];
    return {mydata};
  }
}
