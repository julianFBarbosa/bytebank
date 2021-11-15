import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss'],
})
export class NewTransactionComponent {
  @Output() onTransfer = new EventEmitter<object>();

  value!: number;
  destiny!: number;

  newTransfer() {
    const emmitedValue = { value: this.value, destiny: this.destiny };

    this.onTransfer.emit(emmitedValue);
    this.clearFields();
  }

  clearFields() {
    this.value = 0;
    this.destiny = 0;
  }
}
