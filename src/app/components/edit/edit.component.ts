import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/Model/consumer';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editingConsumer: Consumer;
  toSearchConsumerEmail: string;
  searchConsumer() {
    if (this.toSearchConsumerEmail.length > 0) {
      this.editingConsumer = this.consumerService.getConsumer(
        this.toSearchConsumerEmail
      );
    }
  }

  saveConsumer() {
    this.consumerService.updateConsumer(this.editingConsumer);
  }
  constructor(private consumerService: ConsumerService) {}

  ngOnInit(): void {}
}
