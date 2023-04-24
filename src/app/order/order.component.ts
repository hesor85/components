import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'abp-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() order = [];
  @Output() removeOrderItem = new EventEmitter();

  /**
   * Decrements the count of an orderItem and if its the last one
   * it emits an event to the parent with the index of the element to remove
   */
  removeItem(event, orderItem, index) {
    orderItem.count--;
    if(orderItem.count === 0) {
      // Tell parent to remove orderItem at index if its the last one
      // Look in the template to see how to easily get the index of an ngFor element
      this.removeOrderItem.emit(index);
    }
  }
}
