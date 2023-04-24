import { Component } from '@angular/core';

/**
 * Component that is responsible for putting everything together.
 * Is the parent component of both the searchComponent and the orderComponent.
 * Is the component owning the order array that is both changed by events from
 * the search component and the result is shown in the order component.
 */
@Component({
  selector: 'abp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Elements in the order array has the form:
  // {
  //   id: '1',
  //   name: 'Cola',
  //   price: 20,
  //   count: 2
  // }

  order = [];

  addProductToOrder(product) {
    // Try to find the product in the order array
    const existingOrderItem = this.order.find((orderItem) => {
      return orderItem.id === product.id;
    });

    // If the product was found in the order array, increment the count
    // Else, create new orderItem from the product
    if(existingOrderItem) {
      existingOrderItem.count++;
    } else {
      this.order.push({
        id: product.id,
        name: product.name,
        price: product.price,
        count: 1
      });
    }
  }

  removeProductFromOrder(index) {
    this.order.splice(index, 1);
  }
}
