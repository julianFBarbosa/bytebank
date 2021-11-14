import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss'],
})
export class NewTransactionComponent {
  @Output() onTransfer = new EventEmitter();
  
  value!: number;
  destiny!: number;

  transfer() {
    const emmitedValue = { value: this.value, destiny: this.destiny };
    this.onTransfer.emit(emmitedValue);

    this.clearFields();
  }

  clearFields() {
    this.value = 0;
    this.destiny = 0;
  }
}
