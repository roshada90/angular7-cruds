import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/Model/consumer';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  viewwingConsumer: Consumer;
  toSearchConsumerEmail: string;
  searchConsumer() {
    if (this.toSearchConsumerEmail.length > 0) {
      this.viewwingConsumer = this.consumerService.getConsumer(
        this.toSearchConsumerEmail
      );
    }
  }
  constructor(private consumerService: ConsumerService) {}

  ngOnInit(): void {}
}
