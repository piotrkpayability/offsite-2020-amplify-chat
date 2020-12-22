import { Component, OnInit } from '@angular/core';
import {Message} from './message/message.interface';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[];
  message: string;
  loggedUser: string;
  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService.userName$.subscribe(
      userName => this.loggedUser = userName
    );
    this.messages = [
      {
        user: 'Johnny Silverhand',
        text: 'Wake the 🤬 up, Samurai! We have a city to 🔥'
      },
      {
        user: 'Vi',
        text: '🥔'
      }
    ];
  }

  send(message: string): void{
    this.messages.push({
      user: this.loggedUser,
      text: this.message,
    });
    this.message = '';
  }
}
