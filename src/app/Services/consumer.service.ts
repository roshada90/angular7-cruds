import { Injectable } from '@angular/core';
import { Consumer } from '../Model/consumer';

@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  // constructor() { }

  private consumerList: Consumer[] = [
    new Consumer(1, 'bob@bob.com', '3216549870', 'Bob12'),
  ];

  getConsumer(consumerEmail: string) {
    return this.consumerList.find(
      (consumer) => consumer.email === consumerEmail
    );
  }

  updateConsumer(consumer: Consumer) {
    const consumerToUpdate = this.consumerList.find(
      (consumerIterator) => consumerIterator.id === consumer.id
    );

    if (consumerToUpdate !== null) {
      consumerToUpdate.email = consumer.email;
      consumerToUpdate.phoneNo = consumer.phoneNo;
      consumerToUpdate.username = consumer.username;
    }
  }

  createConsumer(
    consumerEmail: string,
    consumerPhoneNo: string,
    consumerUsername: string
  ) {
    this.consumerList.push(
      new Consumer(
        this.consumerList.length + 1,
        consumerEmail,
        consumerPhoneNo,
        consumerUsername
      )
    );
  }

  deleteConsumer(consumerToDelete: Consumer) {
    this.consumerList.splice(this.consumerList.indexOf(consumerToDelete), 1);
  }
}
