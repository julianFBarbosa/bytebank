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
  transfers: any[] = [];

  transfer($event: any) {
    const actualTransfer = {...$event, date: new Date()};
    this.transfers.push(actualTransfer);
  }
}
