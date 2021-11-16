import { Component } from '@angular/core';
import { TransferService } from './services/transfer.service';

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

  constructor(private service: TransferService) {}

  transfer($event: any) {
    this.service.add($event);
  }
}
