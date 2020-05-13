import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  consumerEmail: string;
  consumerUsername: string;
  consumerPhoneNo: string;
  validity: Boolean;
  saveConsumer() {
    if (this.validField()) {
      this.consumerService.createConsumer(
        this.consumerEmail,
        this.consumerPhoneNo,
        this.consumerUsername
      );
    }
  }

  private validField(): boolean {
    return (
      this.consumerEmail.length > 0 &&
      this.consumerUsername.length > 0 &&
      this.consumerPhoneNo.length > 0
    );
  }
  constructor(private consumerService: ConsumerService) {}

  ngOnInit(): void {}
}
