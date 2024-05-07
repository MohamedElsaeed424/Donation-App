import { Injectable } from "@angular/core";
import fetch, { RequestInit } from 'node-fetch'; // Import RequestInit type

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor() { }

  async sendEmail(): Promise<void> {
    const url: string = 'https://mail-sender-api1.p.rapidapi.com/';
    const options: RequestInit = { // Use RequestInit type for options
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'b501050fd8msh78214b3ddf61046p16563fjsndfdc074f22a0',
        'X-RapidAPI-Host': 'mail-sender-api1.p.rapidapi.com'
      },
      body: JSON.stringify({
        sendto: 'mohamed.smenshawy@gmail.com',
        name: 'Donation APP',
        replyTo: 'Your Email address where users can send their reply',
        ishtml: 'false',
        title: 'Delivery Arrival',
        body: 'Please meet us at the location, the Delivery has arrived!'
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
