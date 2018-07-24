import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const satisfaction = [
      { id: 1, name: 'Very dissatisfied' },
      { id: 2, name: 'Not satisfied' },
      { id: 3, name: 'ordinary' },
      { id: 4, name: 'satisfaction' },
      { id: 5, name: 'Very satisfied' },
    ];
    return {satisfaction};
  }
}