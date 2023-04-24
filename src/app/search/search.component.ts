import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

/**
 * This component is responsible for showing a search input field,
 * showing a list of search results and providing an add button per product
 * that sends an added product to the parent component
 */
@Component({
  selector: 'abp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() addToOrder = new EventEmitter();

  searchProducts = [];

  constructor(private dataService: DataService) { }

  /**
   * Called any time the search input field changes its value
   */
  onSearchChange(event) {
    const searchText = event.data;

    // Call the data service to get an array of all products
    // where the name matches the searchText
    this.dataService.search(searchText).subscribe((result) => {
      // Save the result in an array so the template can update the results shown
      this.searchProducts = result;
    });
  }

  /**
   * Called whenever an add button is clicked for a product
   */
  addProduct(event, product) {
    // Emit an output event to the parent containing the added product
    this.addToOrder.emit(product);
  }
}
