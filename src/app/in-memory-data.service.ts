import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const satisfaction = [
      { id: 1, Snumber: 1 },
      { id: 2, Snumber: 2 },
      { id: 3, Snumber: 3 },
      { id: 4, Snumber: 4 },
      { id: 5, Snumber: 5 },
    ];
    return { satisfaction };
  }
}