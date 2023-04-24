import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Mocked search function that searches in the fakeProducts array
  // In a real implementation this would perform API calls to a server
  search(searchText) {
    // Return an Observable of an empty array if the searchText is empty
    if(!searchText) {
      return of([]);
    }
    // Make both searchText and product name lower case to make the search case insensitive
    // This can be handled by the database instead.
    const lowerCaseSearchText = searchText.toLowerCase();
    const result = this.fakeProducts.filter((product) => {
      return product.name.toLowerCase().includes(lowerCaseSearchText);
    });

    // Returns Observable with the "of" function to fake what the HttpClient would do
    return of(result);
  }

  // Mock of data from a database used to demonstrate the search functionality
  // without hooking it up to a server or a database
  fakeProducts = [
    {
      id: '1',
      name: 'Cola',
      price: 20
    },
    {
      id: '2',
      name: 'Beer',
      price: 25
    }
  ]
}


