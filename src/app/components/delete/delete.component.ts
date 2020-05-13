import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/Model/consumer';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  deletingConsumer: Consumer;
  toSearchConsumerEmail: string;

  deleteConsumer() {
    this.consumerService.deleteConsumer(this.deletingConsumer);
  }

  searchConsumer() {
    if (this.toSearchConsumerEmail.length > 0) {
      this.deletingConsumer = this.consumerService.getConsumer(
        this.toSearchConsumerEmail
      );
    }
  }
  constructor(private consumerService: ConsumerService) {}

  ngOnInit(): void {}
}
