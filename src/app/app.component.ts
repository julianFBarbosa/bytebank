import { Component } from '@angular/core';

interface Transaction {
  value: number;
  destiny: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  transfers!: Transaction;

  transfer($event: any) {
    console.log('$event', $event);
    this.transfers = $event;
  }
}
